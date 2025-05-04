import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Channel } from '../../models/channel';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';
import { Subscription, combineLatest } from 'rxjs'; // combineLatest não está sendo usado
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnChanges, OnInit, OnDestroy { // Implemente todas as interfaces
  @Input() channel!: Channel;
  currentUserId!: string;
  
  messages: Message[] = [];
  newMessage = '';
  private messageSub!: Subscription;

  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['channel']?.currentValue) { // Verificação mais segura
      this.chatService.loadChannelHistory(this.channel.id);
    }
  }

  ngOnInit() {
    // Obtenha o ID do usuário logado diretamente do AuthService
    const user = this.authService.getCurrentUser();
    this.currentUserId = user?.id?.toString() || ''; // Converta para string
    
    console.log('Current User ID:', this.currentUserId); // Verifique no console
    
    this.messageSub = this.chatService.currentChannelMessages.subscribe(
      messages => {
        this.messages = messages.filter(m => m.content.trim() !== '');
      }
    );
  }

  ngOnDestroy() {
    this.messageSub?.unsubscribe(); // Operador de segurança
  }

  

  private isValidMessage(): boolean {
    return !!this.newMessage.trim() && !!this.channel;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.channel) {
      const currentUser = this.authService.getCurrentUser();
      
      if (!currentUser) {
        alert('Faça login para enviar mensagens!');
        return;
      }
  
      const newMessage: Message = {
        id: Date.now().toString(),
        userId: currentUser.id,
        content: this.newMessage,
        timestamp: new Date(),
        channelId: this.channel.id,
        user: {
          name: `${currentUser.firstName} ${currentUser.lastName}`,
          profileImage: currentUser.profileImage || 'assets/default-profile.png'
        }
      };
  
      this.chatService.sendMessage(newMessage);
      this.newMessage = '';
    }
  }
}