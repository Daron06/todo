// let user = 'Возраст 18 лет, мужчина, имя Ибрагим, имейл такой - то@ru '
let users = {
  user1: {
    name: 'Ibragim',
    age: 27,
  },
  user2: {
    name: 'Frodo',
    age: 11,
  },
};

users.user3 = {
  job: 'developer',
  name: 'Legolaz',
};

let todo = {
  name: 'Купить хлеб',
  color: 'green'
}

console.log(todo.color);


for(let key in users) {
  console.log(key)
}