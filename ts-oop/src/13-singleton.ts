export class MyService {
  private static instance: MyService;

  constructor(
    private name: string,
  ) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (!MyService.instance) {
      console.log('-----> Creating new instance');
      MyService.instance = new MyService(name);
    }

    console.log('-----> Returning existing instance');
    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
console.log(myService1.getName());
const myService2 = MyService.create('Service 2');
console.log(myService2.getName());

console.log(myService1 === myService2); // false -> true
