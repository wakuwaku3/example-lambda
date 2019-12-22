import { Response, post } from 'request';
import { ISlackService } from './interfaces';
import { injectable } from 'inversify';

@injectable()
export class SlackService implements ISlackService {
  notifyMessage: (args: {
    channel: string;
    icon_emoji: string;
    username: string;
    text: string;
  }) => Promise<Response> = async args => {
    const options = {
      url: process.env.SLACK_ENDPOINT,
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      json: args
    };
    return await new Promise<Response>((resolve, reject) =>
      post(options, (error, response, _) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      })
    );
  };
}
