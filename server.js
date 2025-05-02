const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
  console.log('Mensagem recebida:', message);
  const fullMessage = {
    id: Date.now().toString(),
    userId: msgData.userId || 'unknown', // Garanta que está vindo do cliente
    user: {
      name: msgData.userName || 'Anônimo',
      profileImage: msgData.profileImage || 'assets/default-profile.png'
    },
    ...msgData,
    timestamp: new Date().toISOString()
  };

  ws.on('requestHistory', (channelId) => {
    const history = getMessagesFromDatabase(channelId); // Implemente isso
    ws.send(JSON.stringify({ type: 'history', data: history }));
  });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});

console.log('WebSocket server running on ws://localhost:8080');