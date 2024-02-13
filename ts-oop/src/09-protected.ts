enum AnimalType {
  MAMMAL = 'Mammal',
  BIRD = 'Bird',
  FISH = 'Fish',
}

export class Animal {
  constructor(
    protected name: string,
    protected age: number,
    protected type: AnimalType
  ) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name} and I'm a ${this.type.toLowerCase()}`;
  }

  protected doSomething() {
    console.log('Doing something...');
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
    this.doSomething();
  }

  greeting(): string {
    return `Hello, I'm ${this.name} and I'm a ${this.race} dog`;
  }

  move() {
    super.move();
    console.log('Running...');
  }
}

const lassie = new Dog('Lassie', 5, 'Collie');
console.log(lassie.greeting());
lassie.woof(3);
// lassie.doSomething(); // Error: Property 'doSomething' is protected and only accessible within class 'Animal' and its subclasses.
console.log(lassie.greeting());
lassie.move();
