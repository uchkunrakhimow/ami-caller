import AMI from './lib/ami';

// Configuration Constants
const numberToCall: string = '901234567';
const channelName: string = 'your_channel_name';
const context: string = 'your_context';
const callerId: string = 'your_caller_id';

// Define action for call origination
const createOriginateAction = (
  number: string,
  channel: string,
  ctx: string,
  callerID: string,
) => ({
  Action: 'Originate',
  Channel: `Local/${number}@${channel}`,
  Context: ctx,
  Exten: number,
  Priority: '1',
  CallerID: callerID,
  Async: 'true',
});

// Function to initiate call
const initiateCall = async (action: Record<string, string>) => {
  try {
    const response = await new Promise((resolve, reject) => {
      AMI.action(action, (err: Error | null, data: any) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
    console.log('Call initiated successfully:', response);
  } catch (error) {
    console.error('Failed to initiate call:', error);
  }
};

const action = createOriginateAction(
  numberToCall,
  channelName,
  context,
  callerId,
);
initiateCall(action);
