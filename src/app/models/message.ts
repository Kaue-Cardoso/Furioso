export interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  channelId: string; // Opcional aqui se for tratado separadamente
  user?: {
    name: string;
    profileImage?: string;
  };
  // Adicione se necessário para o servidor
}