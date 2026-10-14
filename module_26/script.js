//=====Домашнє завдання-Телефонна книга====/ /
  class Abonent {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
      }
//==========//
    set setAbonent(data) {
      this.name = data.name;
      this.phone = data.phone;
      }
//==========//
    get getAbonent() {
      return `Ім'я: ${this.name}, телефон: ${this.phone}`;
    }
  };
//==========//
const abonent1 = new Abonent("Ірина", "093-00-00-001");
const abonent2 = new Abonent("Тетяна", "063-00-00-002");
const abonent3 = new Abonent("Марія", "093-00-00-003");

//==========//
console.log(abonent1.getAbonent);
console.log(abonent2.getAbonent);
console.log(abonent3.getAbonent);