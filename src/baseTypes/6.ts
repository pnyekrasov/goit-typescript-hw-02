/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

type ComplexType = string | number;

function calc(num1: ComplexType, num2: ComplexType): ComplexType {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

function customError(): never {
  throw new Error("Error");
}

export {};
