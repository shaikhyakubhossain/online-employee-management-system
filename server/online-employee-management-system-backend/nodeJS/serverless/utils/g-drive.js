const { gDriveProjectsFolderId, gDriveCaseStudiesFolderId } = require("../secrets/api-keys");


const setGDriveFolder = (section) => {
  switch (section) {
    case "caseStudy":
      return gDriveCaseStudiesFolderId;
    case "project":
      return gDriveProjectsFolderId;
    default:
      return null;
  }
};

module.exports = { setGDriveFolder };