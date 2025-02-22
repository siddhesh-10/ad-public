import { Component, ViewChild, ElementRef, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter,Output } from '@angular/core';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { catchError, finalize, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormMapping, responseToFormMapping } from '../../models/form-mapping.interface';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatBubbleComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @Output() updateForm: EventEmitter<FormMapping> = new EventEmitter<FormMapping>();
  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  isLoading = false;
  lastResponse: any = null;
  private shouldScrollToBottom = false;
  private lastScrollHeight = 0;

  // Cache the formatted fields
  private formattedFieldsCache: Map<string, any[]> = new Map();

  // Memoize the ordered fields
  private readonly orderedFields: (keyof FormMapping)[] = [
    'adName',
    'adDescription',
    'budget',
    'startDate',
    'endDate',
    'influencerType',
    'category',
    'vibeScore',
    'instructions',
    'hashtags'
  ];

  private readonly fieldLabels: Record<keyof FormMapping, string> = {
    adName: 'Campaign Name',
    adDescription: 'Description',
    budget: 'Budget',
    startDate: 'Start Date',
    endDate: 'End Date',
    influencerType: 'Influencer Type',
    category: 'Category',
    vibeScore: 'Vibe Score',
    instructions: 'Additional Requirements',
    hashtags: 'Hashtags'
  };

  constructor(
    private chatService: ChatService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.messages = [{
      content: 'Hello! I can help you create your ad campaign. Just explain what kind of ad you want to create, and I\'ll provide suggestions for filling out the form.',
      sender: 'system',
      timestamp: new Date(),
      isJson: false
    }];
  }

  formatJsonResponse(json: any): any[] {
    if (!json) return [];

    const cacheKey = typeof json === 'string' ? json : JSON.stringify(json);
    if (this.formattedFieldsCache.has(cacheKey)) {
      return this.formattedFieldsCache.get(cacheKey)!;
    }

    try {
      const parsedJson = typeof json === 'string' ? JSON.parse(json) : json;
      const formattedFields = this.orderedFields
        .map(formField => {
          const apiField = Object.entries(responseToFormMapping)
            .find(([_, value]) => value === formField)?.[0];
          
          if (apiField && parsedJson[apiField] !== undefined) {
            return {
              key: this.fieldLabels[formField],
              value: parsedJson[apiField]
            };
          }
          return null;
        })
        .filter(field => field !== null);

      this.formattedFieldsCache.set(cacheKey, formattedFields);
      return formattedFields;
    } catch (e) {
      return [];
    }
  }

  applyToForm() {
    if (!this.lastResponse) return;

    const formData: Partial<FormMapping> = {};
    
    // Map only the fields that exist in the response
    Object.entries(responseToFormMapping).forEach(([responseKey, formKey]) => {
      if (this.lastResponse[responseKey] !== undefined) {
        // Convert values to appropriate types
        let value = this.lastResponse[responseKey];
        
        // Handle specific type conversions
        if (formKey === 'budget') {
          value = parseFloat(value) || 0;
        } else if (formKey === 'vibeScore') {
          value = parseInt(value) || 70;
        }
        
        formData[formKey as keyof FormMapping] = value;
      }
    });

    // Emit the partial form data
    this.updateForm.emit(formData);
  }

  sendMessage() {
    if (!this.newMessage.trim() || this.isLoading) return;

    this.shouldScrollToBottom = true;
    this.messages.push({
      content: this.newMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
      isJson: false
    });

    // this.messages = [...this.messages, userMessage];
    this.newMessage = '';
    this.isLoading = true;
    this.cdr.detectChanges();

    const history = this.chatService.getConcatenatedHistory(this.messages);
    
    this.chatService.sendMessage(history)
      .pipe(
        debounceTime(300),
        catchError(error => {
          console.error('Chat API Error:', error);
          return of({
            response: 'Sorry, I encountered an error. Please try again later.'
          });
        }),
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(response => {
        const isErrorResponse = response && (response as any).error !== undefined;
        const messageContent = isErrorResponse 
          ? (response as any).error 
          : response;
        const isJson = !isErrorResponse;
        this.lastResponse = response;
        
        this.messages = [
          ...this.messages.slice(-2),
          {
            content: messageContent,
            sender: 'system',
            timestamp: new Date(),
            isJson: isJson
          }
        ];

        this.scrollToBottom();
        this.cdr.detectChanges();
      });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private scrollToBottom() {
    if (!this.chatContainer?.nativeElement) return;
    
    const element = this.chatContainer.nativeElement;
    const newScrollHeight = element.scrollHeight;
    
    // Only scroll if content height has changed
    if (newScrollHeight !== this.lastScrollHeight) {
      element.scrollTop = newScrollHeight;
      this.lastScrollHeight = newScrollHeight;
    }
  }

  // Add method to handle manual scrolling
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    // If user has scrolled up, don't auto-scroll on next message
    this.shouldScrollToBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1;
  }
} 