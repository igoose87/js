// arrays and objects
const cities = [
  'St. Petersburg',
  'Moscow',
  'Tokyo'
]

const citiesUSA = [
  'New-York',
  'LA'
]

console.log(cities[0])
console.log()

// добавить в конец
cities.push('Seoul');
console.log(cities);
console.log()

// добавить в начало
cities.unshift('Chicago');
console.log(cities);
console.log()

// Объединение 2-ух массивов:
console.log(cities.concat(citiesUSA));
console.log()

// Получить часть массива:
console.log(cities.slice(0,2));
console.log()

// Удалить либо заменить часть массива:
console.log(cities.splice(0, 1, 'London'));
console.log()

// reverse
console.log(cities.reverse(cities))
console.log()

// find
// find(iter => variable === 'smth')
const moscow = cities.find(city => city === 'Moscow');
console.log(moscow)
console.log()

// Фильтрация
const filteredCities = cities.filter(city => city !== 'London');
console.log(filteredCities);
console.log()

cities1 = [
  'St. Petersburg',
  'Moscow',
  ['Tokyo'] // массив внутри массива
]
console.log(cities1)
// flat - убирает лишние скобки
console.log(cities1.flat());
console.log()


// Массив с объектами
const cart = [
  {
    name: 'BMW',
    price: 100_000
  },
  {
    name: 'Merced',
    price: 200_000
  },
]

// Аналогичные ф-ии, разная запись
const sum = cart.reduce((acc, product) => (acc += product.price), 0);
const sumAnotherForm = cart.reduce((acc, product) => {
  return acc += product.price;
}, 0)

console.log(sum);

// sort
const nums = [5, 3, 7, 10, 100];
console.log(
  nums.sort((a, b) => {
    return a - b;
  })
)
console.log();

// objects
const user = {
  firstName: 'Egor',
  age: 21
}

// все значения
console.log(Object.values(user));

// все ключи
console.log(Object.keys(user));

// приплюсовать 2 объекта
console.log(Object.assign(user, {
  isOwner: true
}))