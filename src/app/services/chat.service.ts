import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesByChannel = new Map<string, Message[]>();
  currentChannelMessages = new BehaviorSubject<Message[]>([]);
  currentChannelId: string | null = null;
  private ws!: WebSocket;

  constructor() {
    this.connectWebSocket();
  }

  private connectWebSocket() {
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onopen = () => {
      console.log('Conexão WebSocket estabelecida');
    };

    this.ws.onmessage = (event) => this.handleWebSocketMessage(event);
    
    this.ws.onerror = (error) => {
      console.error('Erro WebSocket:', error);
    };
  }

  loadChannelHistory(channelId: string) {
    this.currentChannelId = channelId;
    
    // Busca do servidor
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'requestHistory',
        channelId
      }));
    }
    
    // Busca do cache local
    const cachedMessages = this.messagesByChannel.get(channelId) || [];
    this.currentChannelMessages.next([...cachedMessages]);
  }

  private handleWebSocketMessage(event: MessageEvent) {
    const data = JSON.parse(event.data);
    
    if (data.type === 'history') {
      const messages = data.data.map((m: any) => this.parseMessage(m));
      this.messagesByChannel.set(data.channelId, messages);
      this.currentChannelMessages.next([...messages]);
    } else {
      const message = this.parseMessage(data);
      this.handleIncomingMessage(message);
    }
  }

  private handleIncomingMessage(message: Message) {
    
    if (!message?.content?.trim()) {
      console.warn('Mensagem inválida:', message);
      return;
    }

    const channelMessages = this.messagesByChannel.get(message.channelId) || [];
  channelMessages.push(message);
  this.messagesByChannel.set(message.channelId, channelMessages);
  
  if (message.channelId === this.currentChannelId) {
    this.currentChannelMessages.next([...channelMessages]);
  }
  }

  private parseMessage(raw: any): Message {
    // Corrigir timestamp inválido
    const timestamp = this.safeDateParse(raw.timestamp);
    
    return {
      id: raw.id || Date.now().toString(),
      content: raw.content,
      userId: raw.userId,
      channelId: raw.channelId,
      timestamp: timestamp,
      user: raw.user
    };
  }

  private safeDateParse(timestamp: string | number | Date): Date {
    try {
      const date = new Date(timestamp);
      return isNaN(date.getTime()) ? new Date() : date; // Fallback para data atual
    } catch {
      return new Date(); // Fallback seguro
    }
  }

  sendMessage(message: Message) {
    if (!message.channelId) {
      console.error('Mensagem não possui channelId');
      return;
    }

    const payload = {
      ...message,
      type: 'newMessage'
    };

    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(payload));
    } else {
      console.error('WebSocket não conectado');
    }
  }
}