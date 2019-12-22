import { Response } from 'request';

export interface ISlackService {
  notifyMessage: (args: {
    channel?: string;
    icon_emoji?: string;
    username?: string;
    text?: string;
  }) => Promise<Response>;
}
