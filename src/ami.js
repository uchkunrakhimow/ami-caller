require("dotenv").config();

const manager = require("asterisk-manager");
const { ASTERISK_HOST, ASTERISK_PORT, ASTERISK_USERNAME, ASTERISK_PASSWD } =
  process.env;

const AMI = new manager(
  ASTERISK_PORT,
  ASTERISK_HOST,
  ASTERISK_USERNAME,
  ASTERISK_PASSWD,
  true
);

console.log("AMI connected");

AMI.keepConnected();

module.exports = AMI;
