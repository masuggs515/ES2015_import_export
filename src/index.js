import foods from './foods';
import { choice, remove } from './helpers';

let randFood = choice(foods);

console.log(`I'd like one ${randFood}, please`);
console.log(`Here you go: ${randFood}`);
console.log(`Delicious! May I have another?`);
let newFoods = remove(foods, randFood);
console.log(`I'm sorry we're all out of ${randFood}. We have ${newFoods.length} different fruits left.`);
