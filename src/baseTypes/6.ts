/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: string | number, num2: string | number) {
  if (num1 === "number" && num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

function customError(): never {
  throw new Error("Error");
}

export {};
