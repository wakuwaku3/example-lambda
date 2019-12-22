import { injectable, inject } from 'inversify';
import { INotifyUsecase } from './interfaces';
import { reminder, event, clock } from '../infrastructures/di/symbols';
import { IEvent } from '../domain/attendance/interfaces';
import { IReminder } from '../domain/notification/interfaces';
import { IClock } from '../domain/system/interfaces';

@injectable()
export class NotifyUsecase implements INotifyUsecase {
  constructor(
    @inject(reminder) private reminder: IReminder,
    @inject(event) private event: IEvent,
    @inject(clock) private clock: IClock
  ) {}
  notifyHoliday = async () => {
    const date = this.clock.now();
    const name = this.event.getName(date);
    if (!name) {
      return;
    }
    if (date)
      await this.reminder.notifyHoliday({
        date,
        name
      });
  };
}
