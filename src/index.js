const ami = require('./ami');

const numberToCall = 901234567;
const channelName = 'callbackout';
const context = 'callback';
const callerId = 900;

ami.action(
  {
    action: 'originate',
    channel: `Local/${numberToCall}@${channelName}`,
    context: context,
    exten: numberToCall,
    priority: 1,
    callerid: callerId,
    async: 'true',
  },
  (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Call initiated successfully:', data);
    }
  }
);
