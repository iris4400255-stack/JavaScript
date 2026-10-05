//===== Завдання 1 =====//
function checkAge(age) {
  return age > 18 || confirm("Батьки дозволили?");
}
//===== Завдання 2 =====//
function min(a, b) {
  return a < b ? a : b;
}
//===== Завдання 3 =====//
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);