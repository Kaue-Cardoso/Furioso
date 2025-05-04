const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado');

  ws.on('message', (message) => {
    try {
      console.log('Mensagem recebida:', message.toString()); // Log da mensagem como string

      const msgData = JSON.parse(message.toString()); // Converta o Buffer para string antes do parse

      if (!msgData.content) {
        console.warn('Mensagem sem conteúdo:', msgData);
        return;
      }

      const fullMessage = {
        id: Date.now().toString(),
        userId: msgData.userId || 'unknown',
        content: msgData.content,
        timestamp: new Date().toISOString(),
        channelId: msgData.channelId,
        user: msgData.user || {
          name: 'Anônimo',
          profileImage: 'assets/default-profile.png'
        }
      };

      // Broadcast para todos os clientes
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(fullMessage));
        }
      });

    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
    }
  });

  ws.on('error', (error) => {
    console.error('Erro no WebSocket:', error);
  });
});

console.log('WebSocket server running on ws://localhost:8080');













// wss.on('connection', (ws) => {
//   ws.on('message', (message) => {
//   console.log('Mensagem recebida:', message);
//   const fullMessage = {
//     id: Date.now().toString(),
//     userId: msgData.userId || 'unknown', // Garanta que está vindo do cliente
//     user: {
//       name: msgData.userName || 'Anônimo',
//       profileImage: msgData.profileImage || 'assets/default-profile.png'
//     },
//     ...msgData,
//     timestamp: new Date().toISOString()
//   };

//   ws.on('requestHistory', (channelId) => {
//     const history = getMessagesFromDatabase(channelId); // Implemente isso
//     ws.send(JSON.stringify({ type: 'history', data: history }));
//   });

//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message.toString());
//       }
//     });
//   });
// });

// console.log('WebSocket server running on ws://localhost:8080');