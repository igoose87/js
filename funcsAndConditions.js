// fn & conditions
function sum(num1, num2) {
  if (num1 === 0)
    return 'Первое число не должно быть нулем';

  return num1 + num2;
}

console.log(sum(0, 5))
console.log(sum(10, 5))


function termSum(num1, num2) {
  return num1 === 0 ? 'Первое число не должно быть нулем' : num1 + num2;
}

console.log(sum(0, 5));
console.log(sum(15, 20));

// const name = (args) => { logic }
// 20 - по умолч, если не передали значение
const minus = (num1, num2 = 20) => {
  return num1 === 0 ? 'Первое число не должно быть нулем' : num1 - num2;
}
console.log(minus(10))

// сокращенная стрелочная ф-ия, стрелка означает что возвращается то, что после нее
const minusCut = (num1, num2) => 
  num1 === 0 ? 'Первое число не должно быть нулем' : num1 - num2;
console.log(minusCut(100, 40));

// switch case
// в конце case всегда идет return либо break!
function getPrice(name) {
  switch (name) {
    case 'BMW':
      return '$100 000'
    case 'Mercedes':
      return '$200 000'

    default:
      return 'Такой машины нет в каталоге'
  }
}

console.log(getPrice('BMW'));