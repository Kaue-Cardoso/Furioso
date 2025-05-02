import { Category } from '../models/category';

export const CATEGORIES: Category[] = [
  {
    id: 'cs',
    name: 'Counter-Strike',
    game: 'CS',
    description: 'Chats sobre o time de CS da FURIA',
    icon: 'assets/icons/csgo.png',
    channels: [
      {
        id: 'cs-1',
        name: 'partidas-ao-vivo',
        isPrivate: false,
        messages: []
      },
      {
        id: 'cs-2',
        name: 'comunidade',
        isPrivate: false,
        messages: []
      }
    ]
  },
  {
    id: 'recomendacoes',
    name: 'Furiosos',
    game: 'GENERAL',
    description: 'Envie sugestões para a organização',
    icon: 'assets/icons/suggestions.png',
    channels: [
      {
        id: 'rec-1',
        name: 'geral',
        isPrivate: false,
        messages: []
      }
    ]
  }
];