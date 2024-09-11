import { useState, useEffect } from "react";

type webSocketDateType = {
  type: string;
  data: string;
  client?: string;
  clientsOnline?: string;
};

type serverMessageType = { sentBy: string | undefined; message: string };

const useWebSocket = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<serverMessageType[]>([]);
  const [clientsOnline, setClientsOnline] = useState<string | undefined>("");

  let socket: WebSocket;

  useEffect(() => {
    !socket && setupSocket();
  }, []);

  const setupSocket = () => {
    socket = new WebSocket("wss://oems-backend-npeq.onrender.com/");
    // socket = new WebSocket("ws://localhost:4000");
    socket.onopen = () => {
      console.log("connected to server");
      setWs(socket);
    };

    socket.onmessage = (event) => {
      const data: webSocketDateType = JSON.parse(event.data);
      if (data.type === "message") {
        // console.log("message", data);
        setMessagesList((prev) => [
          ...prev,
          { sentBy: data.client, message: data.data },
        ]);
      } else if (data.type === "clientsOnline") {
        setClientsOnline(data.clientsOnline);
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from the server");
    };
  }

  const sendMessage = (message: string, messageType: string) => {
    const messageData = {
      type: messageType,
      data: message,
    };
    socket.send(JSON.stringify(messageData));
  };

  return {
    ws,
    messagesList,
    clientsOnline,
    sendMessage,
  };
};

export default useWebSocket;
