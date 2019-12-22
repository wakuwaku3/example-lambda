import { injectable, inject } from 'inversify';
import { IReminder, Holiday } from './interfaces';
import { ISlackService } from '../../infrastructures/slack/interfaces';
import { slackService } from '../../infrastructures/di/symbols';

@injectable()
export class Reminder implements IReminder {
  constructor(@inject(slackService) private slackService: ISlackService) {}
  notifyHoliday = async (holiday: Holiday) => {
    await this.slackService.notifyMessage({
      text: holiday.name
    });
  };
}
