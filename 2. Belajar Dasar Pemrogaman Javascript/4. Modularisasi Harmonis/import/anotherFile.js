export function sayHello() {
  return console.log("Hello Ini diambil dari function sayHello");
}
export function sayGoodBye() {
  return console.log("Hello Ini diambil dari function sayGoodBye");
}

const name = "Irnanda";
const status = "Student";
const birthYear = 2003;

export { name, status, birthYear };
