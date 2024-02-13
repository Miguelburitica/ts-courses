// var _ = require('lodash');
import _ from 'lodash';
const let = 1 + '1';

const data = [
  {
    username: 'Nico',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Zullema',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  }
]

const rta = _.groupBy(data, 'role');
console.log('rta', rta);

