import { injectable } from 'inversify';
import { IEvent } from './interfaces';

@injectable()
export class Event implements IEvent {
  constructor() {}

  getName: (date: Date) => string = date => {
    return '祝日の名前';
  };
}
