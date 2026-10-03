//===== Завдання 1 ======//
{
  const fruits = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
    ];
  const names = fruits.map((fruit) => fruit.name);
  console.log(names);
}
//===== Завдання 2 =====//
{
for (let i = 2; i <= 10; i += 2) {
console.log(i);
}
}
//===== Завдання 3 ====//
{
let i = 2;
while (i <= 10) {
console.log(i);
i += 2; }
}
//===== Завдання 4 =====//
{
while (true) {
const number = prompt("Введіть число більше 100");
if (number === "" || number === null || Number(number) > 100) {
break; }
  }
}
//===== Завдання 5 ====//
{
  const girls = [
    { age: 23, name: "Оля" },
    { age: 29, name: "Аня" },
    { age: 10, name: "Юля" },
    { age: 20, name: "Катя" },
  ];
const sum = girls.reduce((total, girl) => total + girl.age, 0);
const average = sum / girls.length;
console.log(average);
}