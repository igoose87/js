// EcmaScript

//template string
const firstName = 'Egor';
const age = 21;
console.log(`${firstName}: ${age}`);

// rest оператор
function printNums(...numbers){
  console.log(numbers)
}
printNums(1, 2, 3);

// деструктуризация
const user = {
  name: 'Egor',
  age: 21,
  city: 'SPB'
}

function getUser({name, ...rest}) {
  return name;
}
console.log(getUser(user));

// spread оператор
const user2 = {
  country: 'Ru'
}

const main = {
  ...user,
  ...user2
}
console.log(main);

// то же самое работает и с массивами
const cities = ['SPB', 'Moscow'];
const cities2 = ['Tokyo', 'London'];
const allCities = [...cities, ...cities2];
console.log(allCities);

// tuples
const names = ['Egor', 'Artem'];
const [name1, name2] = names;
console.log(name1, name2);

// string converting
// from int to string
const number = 10;
console.log(number.toString());
console.log(String(number));

// from string to int
const number1 = '20';
console.log(parseInt(number1));
console.log(Number(number1));
console.log(+number1);

// можно разбивать число на разряды, спейсы игнорируются
console.log(100_000_000);

// find and replace in str
const text = 'Max, Egor, Misha, Semen, Max';
console.log(text.replaceAll('Max', ''));

// last el
const anotherNumbers = [1, 2, 6, 4, 23];
console.log(anotherNumbers.at(-1));