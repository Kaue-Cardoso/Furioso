import { Channel } from "./channel";

export interface Category {
    id: string;
    name: string;
    game: string; // 'CS', 'LOL', 'VALORANT', 'ADMIN'
    description: string;
    channels: Channel[];
    icon?: string;
  }