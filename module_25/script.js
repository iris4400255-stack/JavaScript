//===== Завдання 1 =====//
const student = {
  name: "",
  specialty: "",
  averageGrade: 0,
  missedLessons: 0,
  showInfo: function () {
    console.log("Ім'я:", this.name);
    console.log("Спеціальність:", this.specialty);
    console.log("Середній бал:", this.averageGrade);
    console.log("Пропущено занять:", this.missedLessons);
  },
};
const student1 = {
  name: "Іван",
  specialty: "Frontend",
  averageGrade: 10,
  missedLessons: 2,
};
const student2 = {
  name: "Олена",
  specialty: "Backend",
  averageGrade: 11,
  missedLessons: 1,
};
const student3 = {
  name: "Максим",
  specialty: "FullStack",
  averageGrade: 9,
  missedLessons: 4,
};
student.showInfo.call(student1);
student.showInfo.apply(student2);
const showStudent = student.showInfo.bind(student3);
showStudent();

//===== Завдання 2 =====//
const htmlBtn = document.getElementById("htmlBtn");
const cssBtn = document.querySelector("#cssBtn");
const text = document.querySelector("#text");
function htmlInfo() {
  text.textContent =
    "HTML — це мова розмітки для створення структури вебсторінки.";
}
function cssInfo() {
  text.textContent = "CSS — це мова стилів для оформлення вебсторінки.";
}
htmlBtn.addEventListener("click", htmlInfo);
cssBtn.addEventListener("click", cssInfo);

//===== Завдання 3 =====//
function shop(product, price, quantity) {
  const result = price * quantity;
  return product + " " + result;
}
console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));
