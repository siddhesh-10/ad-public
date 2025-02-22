import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, timeout } from 'rxjs/operators';

export interface ChatMessage {
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
  isJson: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // For demo purposes, we're not using a real API URL.
  private apiUrl = "http://127.0.0.1:8000/generate";
  private readonly API_TIMEOUT = 100000; // 100 seconds timeout

  constructor(private http: HttpClient) { }

  // Simulate sending a message by returning an Observable with a demo response.
  sendMessage(input: string): Observable<any> {
    // // Simulated API response (you could enhance this to mimic your expected behavior)
    // const demoResponse = {
    //   response: `Simulated response for input: ${input}`
    // };
    // return of(demoResponse); 
    console.log("msg sent was",input);
    return this.http.post(this.apiUrl, { input });
    // .pipe(
    //   timeout(this.API_TIMEOUT),
    //   shareReplay(1)
    // );
  }

  getConcatenatedHistory(messages: ChatMessage[]): string {
    // Get last 3 messages and join them with a newline delimiter.
    const recentMessages = messages.slice(-3);
    return recentMessages
      .map(msg => `${msg.sender === 'user' ? 'User' : 'System'}: ${
        typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)
      }`)
      .join('\n');
  }
}
