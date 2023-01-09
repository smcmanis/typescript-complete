import axios from 'axios';
import { User } from './models/User';

const user = User.buildUser({ id: 4 });

user.fetch();

setTimeout(() => console.log(user), 4000);