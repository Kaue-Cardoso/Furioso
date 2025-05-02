import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CATEGORIES } from '../../data/mock-categories';
import { Channel } from '../../models/channel';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-comunidade',
  imports: [HeaderComponent, CommonModule, ChatComponent],
  templateUrl: './comunidade.component.html',
  styleUrl: './comunidade.component.scss'
})
export class ComunidadeComponent {
  categories = CATEGORIES;
  selectedCategory: string | null = 'cs'; // Auto-seleciona CS inicialmente
  activeChannel: Channel | null = this.categories[0].channels[0]; // Primeiro canal

  toggleCategory(categoryId: string) {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }

  selectChannel(channel: Channel) {
    this.activeChannel = channel;
  }
}
