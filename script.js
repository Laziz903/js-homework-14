function square(num) {
    return num * num;
}

console.log(square(777));


let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
  ];

function findPersonsByCity(city) {
    return persons.filter(person => person.city === city);
}

let cityName = prompt("Напишите название города");
let result = findPersonsByCity(cityName);

console.log(result);