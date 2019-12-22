export interface Holiday {
  date: Date;
  name: string;
}
export interface IReminder {
  notifyHoliday: (holiday: Holiday) => Promise<void>;
}
