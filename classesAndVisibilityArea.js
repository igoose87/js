// Классы и области видимости
// Классы - по факту эту функции
// методы класса - функции класса
// # - что-то типо аналога private, для сокрытия поля
class Car {
  #name = ''
  constructor(name){
    this.#name = name;
  }

  getName(){
    return this.#name;
  }
}

// наследуем класс
class Ship extends Car {
  constructor(name) {
    super(name) // для наследования
  }

  getPrice(){
    return 100000;
  }
}

const car = new Car('BMW');
const ship = new Ship('Rocket');
console.log(car.getName());
console.log(ship.getName(), ship.getPrice());