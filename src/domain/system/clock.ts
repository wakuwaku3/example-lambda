import { injectable } from 'inversify';
import { IClock } from './interfaces';

@injectable()
export class Clock implements IClock {
  now = () => new Date();
}
