
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  affiliate?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}