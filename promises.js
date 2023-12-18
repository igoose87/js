// Каждый запрос к серверу является промисом (то, что нужно ждать)
// Синхронный - то, что выполняется по очереди и не требует ожидания
// Асинхронный - то, что выполянется не по очереди (например, нужно подождать пока придут данные с сервера при запросе)

// самый примитивный способ получения данных с сервера - промис и .then
// fetch не отдает готовые данные, он отдает данные в своем формате, которые нужно переделать в json
// fetch('https://jsonplaceholder.typicode.com/todos/1')  // приходит data
//   .then(data => data.json())                           // преобразовывается в json
//   .then(console.log);                                  // сокращенная форма

//   // можно написать .then(data => data.json())
//   //                  .then(data => console.log(data))
//   console.log('___________________');

//   // обработка ошибки
//   fetch('https://jsonplaceholder.typicode.com/todosssssss/1')
//   .then(data => {                                      // проверяем пришла ли data (такая проверка делается только в fetch, обычно все всегда падает в catch)
//     if (data.ok) 
//       return data.json();
//     return data.statusText;                            // метод работает с data.ok, возвращаем текст ошибки
//   })
//   .then(console.log)
  
//   console.log('___________________');

  // async
  const fetchData = async() => {  // ф-ия асинхронная
    console.log('Loading...');

    try {                                                                      // для обработки ошибок
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // ждем, что нам придет

      if (!res.ok) {                                                           // если ошибка выводим ее
        console.log(res.statusText);
      }
      const data = await res.json();                                           // если ошибки нет трансформируем data в json
      return console.log(data);                                                // выводим data
    } catch (err) {
      console.log(err);
    } finally {                                                                // выполняется всегда, независимо от ошибки
      console.log('loaded');
    }
  }

  console.log(fetchData())