import { format, parseISO } from 'date-fns';

const DEFAULT_FORMAT = "MMMM d, yyyy 'at' hh:mm a";

export class DateUtils {
  static format(
    date: string | Date,
    formatStr: string = DEFAULT_FORMAT
  ): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;

    return format(dateObj, formatStr);
  }
}
