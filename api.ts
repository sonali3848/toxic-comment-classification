import { AnalysisResult, DashboardStats } from '../types';

// Mock API functions
export const analyzeComment = async (text: string): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simple toxic word detection for demo
  const toxicWords = ['hate', 'stupid', 'idiot', 'kill', 'die', 'worst', 'terrible', 'awful'];
  const lowerText = text.toLowerCase();
  const hasToxicWords = toxicWords.some(word => lowerText.includes(word));
  
  const baseScore = Math.random() * 0.3; // Base safe score
  const toxicScore = hasToxicWords ? 0.7 + (Math.random() * 0.3) : baseScore;
  
  const classification = toxicScore > 0.8 ? 'severe_toxic' : toxicScore > 0.5 ? 'toxic' : 'safe';
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    text,
    score: toxicScore,
    classification,
    confidence: 0.85 + (Math.random() * 0.15),
    timestamp: new Date().toISOString(),
    categories: {
      toxicity: toxicScore,
      severe_toxicity: classification === 'severe_toxic' ? toxicScore * 0.9 : toxicScore * 0.3,
      obscene: Math.random() * 0.5,
      threat: Math.random() * 0.4,
      insult: hasToxicWords ? toxicScore * 0.8 : Math.random() * 0.2,
      identity_attack: Math.random() * 0.3,
    },
  };
};

export const getDashboardStats = async (): Promise<DashboardStats> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    totalAnalyses: 1247,
    safeComments: 892,
    toxicComments: 355,
    accuracyRate: 94.7,
  };
};

export const getAnalysisHistory = async (): Promise<AnalysisResult[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const mockHistory: AnalysisResult[] = [
    {
      id: '1',
      text: 'This is a great post! Thanks for sharing.',
      score: 0.05,
      classification: 'safe',
      confidence: 0.98,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      categories: {
        toxicity: 0.05,
        severe_toxicity: 0.01,
        obscene: 0.02,
        threat: 0.01,
        insult: 0.03,
        identity_attack: 0.01,
      },
    },
    {
      id: '2',
      text: 'You are such an idiot for posting this',
      score: 0.87,
      classification: 'toxic',
      confidence: 0.91,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      categories: {
        toxicity: 0.87,
        severe_toxicity: 0.15,
        obscene: 0.23,
        threat: 0.08,
        insult: 0.89,
        identity_attack: 0.12,
      },
    },
    {
      id: '3',
      text: 'Looking forward to more content like this',
      score: 0.03,
      classification: 'safe',
      confidence: 0.96,
      timestamp: new Date(Date.now() - 10800000).toISOString(),
      categories: {
        toxicity: 0.03,
        severe_toxicity: 0.01,
        obscene: 0.01,
        threat: 0.00,
        insult: 0.02,
        identity_attack: 0.01,
      },
    },
  ];
  
  return mockHistory;
};