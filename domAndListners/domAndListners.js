// DOM and Event listeners

console.log('Hey!');

// поиск элемента Body по всему документу
const body = document.querySelector('body');
body.style.backgroundColor = "#1F1B22";
body.style.color = "white";

const heading = document.querySelector('.heading');

// меняет html код
heading.innerHTML = '<b>lessons</b>';

// менет текст
heading.textContent = "text changed!";

// добавляет класс, .toggle - включить/выключить
heading.classList.add('testClass');
heading.classList.remove('testClass');

const button = body.querySelector('button');
button.addEventListener('click', () => {
  const type = prompt('Type?')
  if (type === 'green') {
    heading.style.color = '#60FFCA'
  }
  else {
    heading.style.color = '#FFCA85'
  };
})