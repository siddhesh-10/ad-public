export interface InfluencerAd {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  influencerName: string;
  followers: number;
  category: string;
  isPromoted: boolean;
  price?: number;
  engagement?: number;
  totalSpots: number;
  remainingSpots: number;
} 