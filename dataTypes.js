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

const users = [user, {}]
users[1]

