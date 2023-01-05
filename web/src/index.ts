import axios from 'axios';
import { User } from './models/User';

const user = new User({ id: 4 });

user.fetch();

setTimeout(() => console.log(user), 4000);

// setTimeout(() => {
//   console.log(user);
// }, 4000);
