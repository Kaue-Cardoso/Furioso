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
        messages: [],
        streamUrl: 'https://www.youtube.com/watch?v=kfKkpb4EmoU'
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
        messages: [],
        streamUrl: 'https://www.youtube.com/watch?v=CWdV9-sDx1g'
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
    id: 'vava',
    name: 'Valorant',
    game: 'VALORANT',
    description: 'Chats sobre o time de VALORANT da FURIA',
    icon: 'assets/icons/valorant.png',
    channels: [
      {
        id: 'vava-1',
        name: 'partidas-ao-vivo',
        description: 'Acompanhe ao vivo a transmissao Oficial',
        isPrivate: false,
        messages: [],
        streamUrl: 'https://www.youtube.com/watch?v=rzNWLwKyeX0'
      },
      {
        id: 'vava-2',
        name: 'comunidade',
        description: 'Interaja com outros torcedores ',
        isPrivate: false,
        messages: []
      }
    ]
  },
  {
    id: 'kings',
    name: 'Kings',
    game: 'KINGS_LEAGUE',
    description: 'Chats sobre o time de Kings League da FURIA',
    icon: 'assets/icons/kings_league.png',
    channels: [
      {
        id: 'kings-1',
        name: 'partidas-ao-vivo',
        description: 'Acompanhe ao vivo a transmissao Oficial',
        isPrivate: false,
        messages: [],
        streamUrl: 'https://www.youtube.com/watch?v=BjvluUErbDE'
      },
      {
        id: 'kings-2',
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
    icon: 'assets/icons/furia.png',
    channels: [
      {
        id: 'rec-2',
        name: 'geral',
        description: 'Envie sugestões para a organização',
        isPrivate: false,
        messages: []
      }
    ]
  },
];