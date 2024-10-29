import { config } from 'dotenv';
//@ts-ignore
import { Manager } from 'asterisk-manager';

config();

const { ASTERISK_HOST, ASTERISK_PORT, ASTERISK_USERNAME, ASTERISK_PASSWD } =
  process.env;

const AMI = new Manager({
  port: parseInt(ASTERISK_PORT!),
  host: ASTERISK_HOST!,
  username: ASTERISK_USERNAME!,
  password: ASTERISK_PASSWD!,
  keepConnected: true,
});

console.log('AMI connected');

export default AMI;
