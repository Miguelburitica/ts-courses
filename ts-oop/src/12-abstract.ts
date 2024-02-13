import { Animal, AnimalType, Dog } from "./08-inheritance.ts";

// const animal: Animal = new Animal('Fifi', 3, AnimalType.MAMMAL); // Error: Cannot create an instance of an abstract class.
// console.log(animal.greeting());

const lassie: Dog = new Dog('Lassie', 5, 'Collie');
console.log(lassie.greeting());
lassie.woof(3);
