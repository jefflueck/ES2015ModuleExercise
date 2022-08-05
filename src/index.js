import { choice, remove } from './helpers';
import items from './foods';

const RandomFruit = () => {
  const item = choice(items.items);
  console.log(`${item}`);
  console.log(`I'd like one ${item} please`);
  if (item !== undefined) {
    console.log(`Here you go: ${item}`);
    console.log(`Delicious!, May I have another?`);
    const newItems = remove(items.items, item);
    console.log(
      `Sorry, We are all out of ${item}. We have ${newItems.length} items left.`
    );
  }
};

RandomFruit();
