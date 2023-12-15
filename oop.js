// ООП - объектно ориентированное программирование, подход к разработке програмного обеспечения, 
// в котором программа строится из объектов, представляющих реальные или абстрактные сущности.
// Основные принципы: инкапсуляция, наследование, полиморфизм, (абстракция)

class Animal {
  #name = 'Unknown';
  constructor(name){
    this.#name = name;
  }

  toMove(){
    console.log(`${this.#name} is moving!`);
  }

  toEat(){
    console.log(`${this.#name} is eating!`);
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
  }

  toBark(){
    console.log('Bark!');
  }
}

const dog = new Dog('Charley');
const dog2 = new Dog('Jimmy');
dog.toMove();
dog.toEat();
dog2.toEat();
dog2.toBark();

class Car {
  name = 'Unknown';

  constructor(name){
    this.name = name;
  }

  toMove(){
    return `${this.name}  is moving!`;
  }
}

class CargoCar extends Car {
  constructor(name){
    super(name);
  }

  sayHello(){
    return `Hi! I am ${this.name}`
  }
  // sayHello = () => `Hi! I'm ${this.name}`;
}

const car = new Car('Car');
const cargoCar = new CargoCar('cargoCar');
console.log(car.toMove());
console.log(cargoCar.sayHello());
console.log(cargoCar.toMove())