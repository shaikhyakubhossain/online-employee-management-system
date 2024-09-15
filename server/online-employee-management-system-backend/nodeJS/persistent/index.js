const express = require("express");
const WebSocket = require("ws");
const app = express();
const {broadcast} = require("./utils/methods");

const server = app.listen(4000, () => {
  console.log("Server is listening on port " + 4000);
});

const wss = new WebSocket.Server({ server });

const connectedClients = [];
let personCount = 0
let sentBy = '';

wss.on("connection", (ws) => {
  personCount = personCount + 1;

  connectedClients.push({
    personId: "person-" + personCount,
    client: ws,
  });

  broadcast(
    connectedClients,
    null,
    { personCount },
    { type: "clientsOnline" },
    WebSocket
  );

  ws.on("message", (data) => {
    connectedClients.map((item) => {
      if (ws === item.client) {
        sentBy = item.name;
        return;
      }
    });

    broadcast(
      connectedClients,
      ws,
      { sentBy: sentBy },
      { type: "message", data: "" + data },
      WebSocket
    );
  });
  ws.on("close", () => {
    connectedClients.map((item, index) => {
      if (ws === item.client) {
        connectedClients.splice(index, 1);
        return;
      }
    });

    personCount = personCount - 1;
    broadcast(
      connectedClients,
      null,
      { personCount },
      { type: "clientsOnline" },
      WebSocket
    );
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "hi",
  });
});
