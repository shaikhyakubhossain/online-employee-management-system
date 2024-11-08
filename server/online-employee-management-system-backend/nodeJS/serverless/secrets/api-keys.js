require('dotenv').config();

const PORT = 4000;
const MongoDBUrl=process.env.MONGO_DB_URI;
const SecretCode=process.env.SIGNUP_SECRET_CODE;

module.exports = {
    PORT,
    MongoDBUrl,
    SecretCode
}