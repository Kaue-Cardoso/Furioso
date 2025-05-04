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
        description: 'Acompanhe ao vivo a transmissao Oficial',
        isPrivate: false,
        messages: []
      },
      {
        id: 'cs-2',
        name: 'comunidade',
        description: 'Interaja com outros torcedores ',
        isPrivate: false,
        messages: []
      }
    ]
  },
  {
    id: 'lol',
    name: 'League-Of-Legends',
    game: 'LOL',
    description: 'Chats sobre o time de LOL da FURIA',
    icon: 'assets/icons/lol.webp',
    channels: [
      {
        id: 'lol-1',
        name: 'partidas-ao-vivo',
        description: 'Acompanhe ao vivo a transmissao Oficial',
        isPrivate: false,
        messages: []
      },
      {
        id: 'lol-2',
        name: 'comunidade',
        description: 'Interaja com outros torcedores ',
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
        id: 'rec-2',
        name: 'geral',
        description: 'Envie sugestões para a organização',
        isPrivate: false,
        messages: []
      }
    ]
  }
];