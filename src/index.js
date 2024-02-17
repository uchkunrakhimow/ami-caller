const ami = require('./ami');

const numberToCall = 901234567; // Defining the number to call
const channelName = '';         // Defining the name of the channel to use for the call
const context = '';             // Defining the context within which to execute the call in Asterisk
const callerId = 0;             // Defining the caller ID for the call


ami.action( // Initiating an action using the AMI to make a call
  {
    action: 'originate',                             // Specifying the action as 'originate' to originate a call
    channel: `Local/${numberToCall}@${channelName}`, // Defining the channel for the call using a Local channel and the specified number and channel name
    context: context,    // Specifying the context within which to execute the call
    exten: numberToCall, // Specifying the extension (number) to call
    priority: 1,         // Setting the priority of the call
    callerid: callerId,  // Setting the caller ID for the call
    async: 'true',      // Indicating that the action should be executed asynchronously
  },

  (err, data) => {     // Callback function to handle the response or error from the AMI action
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Call initiated successfully:', data); // Logging a success message if the call initiation is successful
    }
  }
);
