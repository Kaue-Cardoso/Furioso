import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-stream',
  imports: [CommonModule, FormsModule],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent implements OnChanges {
  @Input() channel: Channel | null = null;

  embedUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    if (!this.channel || !this.channel.streamUrl) return;

    const embed = this.extractEmbedUrl(this.channel.streamUrl);
    if (embed) {
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
    }
  }

  private extractEmbedUrl(url: string): string | null {
    if (url.includes('twitch.tv')) {
      const channelName = url.split('/').pop();
      return `https://player.twitch.tv/?channel=${channelName}&parent=${location.hostname}`;
    }

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }

    return null;
  }
}
