import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection('Xaayb');
const list = new LinkedList([500, -10, -3, 4]);

numbers.sort();
chars.sort();
list.sort();

console.log(numbers);
console.log(chars);
list.print();
