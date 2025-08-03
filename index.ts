export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface AnalysisResult {
  id: string;
  text: string;
  score: number;
  classification: 'safe' | 'toxic' | 'severe_toxic';
  confidence: number;
  timestamp: string;
  categories: {
    toxicity: number;
    severe_toxicity: number;
    obscene: number;
    threat: number;
    insult: number;
    identity_attack: number;
  };
}

export interface DashboardStats {
  totalAnalyses: number;
  safeComments: number;
  toxicComments: number;
  accuracyRate: number;
}