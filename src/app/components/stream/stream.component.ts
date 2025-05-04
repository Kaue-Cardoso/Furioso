import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-stream',
  imports: [CommonModule, FormsModule],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent {

  selectedPlatform: 'twitch' | 'youtube' = 'twitch';
  streamId = '';
  embedUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  loadStream() {
    if (!this.streamId) return;

    let url: string;
    const sanitizedId = this.extractStreamId();

    if (this.selectedPlatform === 'twitch') {
      url = `https://player.twitch.tv/?channel=${sanitizedId}&parent=${document.location.hostname}`;
    } else {
      url = `https://www.youtube.com/embed/${sanitizedId}`;
    }

    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private extractStreamId(): string {
    if (this.selectedPlatform === 'twitch') {
      // Extrai o nome do canal de URLs como: https://www.twitch.tv/nomedocanal
      return this.streamId.split('/').pop() || this.streamId;
    }
    
    // Extrai ID de URLs do YouTube: https://youtu.be/ID ou https://www.youtube.com/watch?v=ID
    const match = this.streamId.match(/v=([^&]+)/);
    return match ? match[1] : this.streamId;
  }

}
