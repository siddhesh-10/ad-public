export interface FormMapping {
  adName?: string;
  adDescription?: string;
  budget?: number;
  startDate?: string;
  endDate?: string;
  influencerType?: string;
  category?: string;
  vibeScore?: number;
  instructions?: string;
  hashtags?: string;
}

export const responseToFormMapping = {
  campaign_name: 'adName',
  campaign_description: 'adDescription',
  budget: 'budget',
  start_date: 'startDate',
  end_date: 'endDate',
  type_of_influencers: 'influencerType',
  category: 'category',
  vibe_score: 'vibeScore',
  additional_requirements: 'instructions',
  hashtags: 'hashtags'
};

export const defaultFormValues: FormMapping = {
  adName: '',
  adDescription: '',
  budget: 100,
  startDate: '',
  endDate: '',
  influencerType: '',
  category: 'fashion',
  vibeScore: 70,
  instructions: '',
  hashtags: ''
}; 