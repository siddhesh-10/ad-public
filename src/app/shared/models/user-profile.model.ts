export interface SocialAccount {
  platform: 'instagram' | 'youtube' | 'tiktok' | 'twitter';
  username: string;
  followers: number;
  engagement: number;
  verified: boolean;
  url: string;
}

export interface PayoutInfo {
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  totalEarned: number;
  pendingAmount: number;
  lastPayout: {
    amount: number;
    date: Date;
    status: 'completed' | 'pending' | 'failed';
  };
  payoutHistory: {
    amount: number;
    date: Date;
    status: 'completed' | 'pending' | 'failed';
    transactionId: string;
  }[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  location: string;
  categories: string[];
  socialAccounts: SocialAccount[];
  payoutInfo: PayoutInfo;
  joinedDate: Date;
} 