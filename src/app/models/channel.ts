import { Message } from "postcss";

export interface Channel {
    id: string;
    name: string;
    description?: string;
    isPrivate: boolean;
    messages: Message[];
    streamUrl?: string;

  }