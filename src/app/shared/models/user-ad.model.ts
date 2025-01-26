export interface UserAd {
  id: number;
  title: string;
  imageUrl: string;
  status: 'applied' | 'rejected' | 'accepted';
  appliedDate: Date;
  responseDate?: Date;
  influencerName: string;
  category: string;
  performance?: AdPerformance;
}

export interface AdPerformance {
  views: number;
  comments: number;
  likes: number;
  shares: number;
  currentEarnings: number;
  projectedEarnings: number;
  engagementRate: number;
  reachRate: number;
  startDate: Date;
  endDate: Date;
} 