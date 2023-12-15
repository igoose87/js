const firstName = 'Egor'; // string
const lastName = null; // null
const age = 21; // number
const city = undefined; // undefined
const isOwner = true; // boolean

const user = {
  firstName: firstName, // ключ - значение, разрешается убирать ключ при дублировании
  lastName: lastName,
  age,
  city,
  isOwner
} // object

// Константа может меняться если мы изменяем элемент массива либо поле объекта
user.age = 26; // Можно менять поле в const объекте

const users = [user, {}]
users.push() // можно изменять const массив
users[1]

