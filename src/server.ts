import AMI from './lib/ami'; // Changed import statement to import the default export from ami.ts

const numberToCall: string = '901234567'; // Changed type to string since it's a phone number
const channelName: string = 'your_channel_name'; // Provide a valid channel name
const context: string = 'your_context'; // Provide a valid context
const callerId: string = 'your_caller_id'; // Provide a valid caller ID

const action = {
  Action: 'Originate', // Changed 'originate' to 'Originate' as it's case sensitive
  Channel: `Local/${numberToCall}@${channelName}`, // Changed 'channel' to 'Channel' to match AMI protocol
  Context: context,
  Exten: numberToCall, // Removed toString() as numberToCall is already a string
  Priority: '1', // Changed type to string as it's expected by AMI
  CallerID: callerId,
  Async: 'true',
};

AMI.action(action, (err: Error | null, data: any) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Call initiated successfully:', data);
  }
});
