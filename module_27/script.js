function Calculator() {
  this.read = function () {
    this.a = Number(prompt("Введіть перше число"));
    this.b = Number(prompt("Введіть друге число"));
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
const calculator = new Calculator();
calculator.read();


console.log("Сума:", calculator.sum());
console.log("Добуток:", calculator.mul());
