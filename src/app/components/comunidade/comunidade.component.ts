import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CATEGORIES } from '../../data/mock-categories';
import { Channel } from '../../models/channel';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';
import { StreamComponent } from '../stream/stream.component';

@Component({
  selector: 'app-comunidade',
  imports: [HeaderComponent, CommonModule, ChatComponent, StreamComponent],
  templateUrl: './comunidade.component.html',
  styleUrl: './comunidade.component.scss'
})
export class ComunidadeComponent {
  categories = CATEGORIES;
  selectedCategory: string | null = 'cs'; // Categoria Padrao
  activeChannel: Channel | null = this.categories[0].channels[0]; // Canal Padrao
  isMenuCollapsed = false;


  toggleCategory(categoryId: string) {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }

  selectChannel(channel: Channel) {
    this.activeChannel = channel;
  }

  shouldShowStream(): boolean {
    if (!this.activeChannel) return false;
    return this.activeChannel.id.split('-')[1] === '1';
  }
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
