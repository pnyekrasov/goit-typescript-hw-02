/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface T {
  title: string;
}

// type T = {
//   title: string;
// };

class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
