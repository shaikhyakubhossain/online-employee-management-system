require('dotenv').config();

const PORT = 4000;
const MongoDBUrl=process.env.MONGO_DB_URI;
const SecretCode=process.env.SIGNUP_SECRET_CODE;
const AuthKey=process.env.AUTH_KEY;
const gDriveApiKey=process.env.G_DRIVE_API_KEY;
const gDriveProjectsFolderId=process.env.PROJECTS_FOLDER_ID;
const gDriveCaseStudiesFolderId=process.env.CASE_STUDY_FOLDER_ID;

module.exports = {
    PORT,
    MongoDBUrl,
    SecretCode,
    AuthKey,
    gDriveApiKey,
    gDriveProjectsFolderId,
    gDriveCaseStudiesFolderId
}