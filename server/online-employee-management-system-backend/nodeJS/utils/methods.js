const broadcast = (
  arrayOfAllClients,
  currentClient,
  dynamicData,
  data,
  WebSocket
) => {
  arrayOfAllClients.map((item) => {
    if (item.client.readyState === WebSocket.OPEN) {
      console.log("dynamicData", dynamicData);
      item.client.send(
        JSON.stringify(whatToSend(item, currentClient, dynamicData, data))
      );
    }
  });
};

const whatToSend = (item, currentClient, dynamicData, data) => {
  switch (data.type) {
    case "message":
      return {
        ...data,
        client: item.client === currentClient ? "you" : dynamicData.sendBy,
      };
    case "clientsOnline":
      return {
        ...data,
        clientsOnline: "" + dynamicData.personNo,
      };
    default:
      break;
  }
};

module.exports = {
  broadcast,
};
