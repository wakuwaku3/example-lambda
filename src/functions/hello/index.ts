import { Callback, Context, S3Event } from 'aws-lambda';
import { container } from '../../infrastructures/di/container';
import { notifyUsecase } from '../../infrastructures/di/symbols';
import { INotifyUsecase } from '../../usecases/interfaces';

export async function handle(event: S3Event, context: Context, callback: Callback) {
  try {
    await container.get<INotifyUsecase>(notifyUsecase).notifyHoliday();
  } catch (err) {
    callback(err);
  }
}
