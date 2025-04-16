const cors = require("cors");
const { clientUrl } = require("../secrets/client-url");

const corsOrigin = {
  origin: clientUrl,
};

module.exports = cors(corsOrigin);