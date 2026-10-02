//======Завдання 1 ====//
{
  let name;
  let city;
  name = "Іван";
  city = name;
  console.log(name);
  console.log(city);
}
//====Завдання 2 ====//
{
  let name = "Olga"; 
  console.log(`Привіт ${1}`);
  console.log(`Привіт ${"name"}`);
  console.log(`Привіт ${name}`);
}
//=====Завдання 3 ====//
{
  let a = "5"; 
  let b = "13cvb";
  let c = "12.9sxdcfgv";

  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}
//======Завдання 4 =====//

{ console.log((0.1 + 0.2).toFixed(1)); }

//=====Завдання 5 =====//

{ console.log(Math.max(20, 10, 50, 40)); }

//=====Завдання 6 =====//

{console.log(Math.floor(Math.random() * 3) + 2);}
//=====Завдання 7 =====//

{const message = "Welcome to Bahamas!";
  console.log(message.length);
}

//=====Завдання 8 =====//

{const message = "Welcome to Bahamas!";
  console.log(message.toUpperCase());
}

//=====Завдання 9 =====//

{ const user = {};
user.name = "Olga";
user.age = 30;
user.city = "Lviv";
console.log(user);
delete user.city;
user["like flowers"] = true;
  console.log(user);
}

//=====Завдання 10 =====//
{const user = {name: "Olga",
age: 30,
city: "Lviv",};
  for (const key in user) {
  console.log(key, user[key]);
  }
}