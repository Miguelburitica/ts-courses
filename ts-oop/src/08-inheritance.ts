export enum AnimalType {
  MAMMAL = 'Mammal',
  BIRD = 'Bird',
  FISH = 'Fish',
}

export abstract class Animal {
  constructor(
    public name: string,
    public age: number,
    public type: AnimalType
  ) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name} and I'm a ${this.type.toLowerCase()}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    age: number,
    public race: string
  ) {
    super(name, age, AnimalType.MAMMAL);
  }

  woof(times: number) {
    console.log('Woof! '.repeat(times));
  }
}

// const fifi = new Animal('Fifi', 3, AnimalType.MAMMAL); // Error: Cannot create an instance of an abstract class.

const lassie = new Dog('Lassie', 5, 'Collie');
