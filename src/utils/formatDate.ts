import { format } from 'date-fns';

export function formartDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, 'dd/MM/yyyy HH:mm');
}
