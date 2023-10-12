/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type Page1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
};

type Page2 = {
  details: {
    createAt: Date;
    updateAt: Date;
  };
};

type Page = Page1 & Page2;

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page1 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
