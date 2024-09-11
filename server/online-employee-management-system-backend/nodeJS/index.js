const express = require('express');
const WebSocket = require('ws');

const app = express();

const server = app.listen(4000, () => {
    console.log('Server is listening on port ' + 4000);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    personCount = personCount + 1;
    console.log('New client connected');
    console.log("person no. ", personCount);

    connectedClients.push({
        personId: 'person-' + personCount,
        client: ws
    });
    // ws.send(JSON.stringify({type: 'clientsOnline', clientsOnline: personCount}));

    ws.on('message', (data) => {
        console.log("message received: %s", data); 
        connectedClients.map((item) => {
            if(ws === item.client){
                sendBy = item.name;
                return;
            }
        });

        // console.log(connectedClients);
    });
    ws.on('close', () => {
        connectedClients.map((item, index) => {
            if(ws === item.client){
                connectedClients.splice(index, 1);
                return;
            }
        });

        personCount = personCount - 1;
        console.log('connection closed');
    })
})