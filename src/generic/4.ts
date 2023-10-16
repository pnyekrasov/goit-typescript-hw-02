/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponentProps {
  title: string;
}

class Component<Props extends IComponentProps> {
  constructor(public props: Props) {}
}

class Page extends Component<IComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
