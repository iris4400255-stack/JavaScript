//===== Завдання 1.=====/ /
  class Abonent {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
      }
//===== Завдання 2.=====//
    set setAbonent(data) {
      this.name = data.name;
      this.phone = data.phone;
      }
//===== Завдання 3. =====//
    get getAbonent() {
      return `Ім'я: ${this.name}, телефон: ${this.phone}`;
    }
  };
//===== Завдання 4. =====//
const abonent1 = new Abonent("Олена", "000-000-001");
const abonent2 = new Abonent("Андрій", "000-000-002");
const abonent3 = new Abonent("Марія", "000-000-003");

//===== Завдання 5.  =====//
abonent1.setAbonent = { name: "Олена", phone: "000-000-004" };

//===== Завдання 6. =====//
console.log(abonent1.getAbonent);
console.log(abonent2.getAbonent);
console.log(abonent3.getAbonent);
