//===== Завдання 1 =====//
{
  let number = 1;
  console.log(number > 0);
  number = 0;
  console.log(number > 0);
  number = -3;
  console.log(number > 0);
}
//===== Завдання 2 ======//
{
  let value = "test";
  console.log(value === "test");
  value = "qwerty";
  console.log(value === "test");
  value = true;
  console.log(value === "test");
}
//===== Завдання 3 =====//
{
  let number = 1;
  if (number > 10) {
    number -= 5;
  } else { number += 5;}
  console.log(number);
  number = 10;
  if (number > 10) {
    number -= 5;
  } else {number += 5;}
  console.log(number);
  number = 13;
  if (number > 10) {
    number -= 5;
  } else {
    number += 5;
  }
  console.log(number);
}
//===== Завдання 4 =====//
{
  const monthNumber = 5;
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  console.log(months[monthNumber - 1]);
}
//===== Завдання 5 =====//
{
  const number = 123;
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  const sum = hundreds + tens + ones;
  console.log(sum);
}
