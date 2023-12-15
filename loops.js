// loops

let students = [
  {
    name: "Vasya",
    age: 21
  },
  {
    name: "Ivan",
    age: 24
  },
]

for (let index = 0; index < students.length; index++) {
  const student = students[index];
  console.log(student, index)
}
console.log();

// можно добавлять поля
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  student.isStudent = true;
}
console.log(students)
console.log()

// современная версия
for (const student of students) {
  student.isStudent = false;
}
console.log(students)

// отличается тем, что возвращает значение
students = students.map((student, index) => {
  student.isStudent = true;
  student.id = index + 1;
  return student;
})
console.log(students);

// делает все то же самое, но ничегт не возвращает
students.forEach((student) => {
  student.isStudent = false;
})
console.log(students);
console.log();

let array = [1, 3, 10, 2, 5];
for (const num of array) {
  console.log(num)
}
console.log();

array.forEach(num => console.log(num));
array = array.map((num) => {
  num = num*2;
  return num;
})
console.log(array)