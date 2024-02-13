import { subDays, format } from 'date-fns'

const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
console.log('rta', format(rta, 'yyyy-MM-dd'));
