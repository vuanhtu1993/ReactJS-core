# 1 React fundamentals
  * Read: https://www.tutorialspoint.com/reactjs/reactjs_overview.htm
## 1.1 What exactly is React ?
  * [ ] Read https://blog.andrewray.me/reactjs-for-stupid-people/
  * [ ] Read https://facebook.github.io/react/docs/why-react.html
  * [ ] Read https://facebook.github.io/react/blog/2013/06/05/why-react.html
  * [ ] Understand what is React, who build React <br>
  React một thư viện Javascript được phát triển bởi Facebook để xây dựng các thành phần ở giao diện người dùng có thể tái sử dụng được. React được sử dụng trong Facebook, Instagram. React được ví như phần View của mô hình MVC.
  * [ ] Understand why use React <br>
  - React sử dụng Viture DOM: cải thiện hiệu năng của trang web.
  - Có thể xây dựng các các Component có thể sử dụng lại.
  - React không chỉ hoạt động ở phía client mà còn có thể render ở phía server
  * [ ] Understand React advantages/disadvantages <br>
  * [ ] Understand Virtual DOM <br>
  Với DOM thật thì khi có mỗi thay đổi trên DOM thì browser sẽ render lại toàn bộ DOM nên nếu có nhiều thay đổi thì DOM sẽ phải lại render lại nhiều lần. Việc này làm ảnh hưởng đến tốc độ tải trang web. Trong React sử dụng DOM ảo giống với DOM thật nhưng khi có thay đổi trên DOM thì DOM ảo này sẽ tìm kiếm lại những điểm thay đổi và render lại DOM mới. Sử dụng DOM ảo giúp cải thiện tốc độ tải trang của trang web.
## 1.2 Environment Setup
  * [ ] Read: https://github.com/facebook/create-react-app
  * [ ] What is create-react-app <br>
  ```create-react-app``` là một package giúp thiết lập nhanh một project React.
  * [ ] Create a new app with create-react-app <br>
  Tạo một folder chứa procject -> cd tới thư mục -> Chạy lệnh ```npm install create-react-app``` -> ```create-react-app <tên_project>``` 
  Như vậy một React project đã được tạo ra.
  * [ ] How to runs the app created by create-react-app in development mode ? <br>
  Để run project được tạo ta bằng ```create-react-app``` ta cd vào project đó và chạy lệnh ```npm start```. Project sẽ được chạy ở đường dẫn http://localhost:3000/.
  * [ ] Investigate a React project structure <br>
  Một React project khi được tạo ra có cấu trúc như hình bên dưới: <br>
  ![alt text](https://image.ibb.co/i8pBWc/Capture.png "React project structure")
    * node_modules: là thư mục chứa các package khi được cài đặt vào project.
    * scr: những đoạn code sẽ được chứa trong các file bên trong thư mục này.
    * .gitignore: chứa các thư mục, các file sẽ được bỏ qua và không được commit lên.
    * package.json: file này chứa các cài đặt của project. 
## 1.3 Hello World
  * [ ] Understand React render method <br>
  render() method của Component sẽ mô tả Component sẽ như thế nào. Hàm render() chỉ render ra một nốt duy nhất nên nếu có nhiều node thì cần bọc nó lại, có thể trog một thẻ div.
  * [ ] Modify the app to display 'Hello World' in app
  * [ ] Using Developer Tools to inspect HTML <br>
## 1.4 Component 
  * [ ] Understand what is a React Component ? <br>
  React được xây dựng xung quanh các Component, chứ không dùng template như các framework khác. Mỗi thành phần trên giao diện là một    Component. Các component có thể là Button, InputText, ... và các component có thể được lồng nhau. Các component trong React giống như các thể HTML. Mỗi component đều có props và state.
  Để tạo một component ta có hai cách: 
  ```
  // Khởi tạo bằng function
  function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
  }
  // Sử dụng class trong ES6
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```
  * [ ] Understand how many type of React Component ? <br>
  Có 2 loại component: class component và function component.
## 1.5 JSX
  * [ ] Understand what is JSX <br>
  JSX là một cú pháp mở rộng của Javascript, với JSX có thể viết Javascript với những tag giống như HTML
  . Về bản chất các tag là những lời gọi hàm sẽ được chuyển đổi trong React code và end up dưới dạng HTML và Javascript trong cây DOM.
```
// JSX
const element = <h1>Hello</h1>;

//Code React sau khi được complie
const element = React.createElement('h1', null, 'Hello');
```
  * [ ] Understand why JSX <br>
  - JXS đảm bảo tính dễ đọc và làm cho việc bảo trì được dễ dàng hơn.<br>
  - JSX tối ưu hóa code khi compile, vì vậy nó chạy nhanh hơn so với code JavaScript tương đương
  * [ ] Understand how to use JSX <br>
```
// Tạo một JSX
const MyButton = (<button>Click Me</button>)
```
  * [ ] Understand how to add JavaScript to JSX <br>
  Đặt các cặp biểu thức Javascript vào dấu ngoặc nhon {}
```
// Button sẽ có nội dung là 6
const MyButton = (<button>{1 + 5}</button>)
```
  * [ ] Understand the limitation of JavaScript in JSX <br>
  * [ ] Understand how we add style in JSX? How to <br>
  Có 2 cách add style trong JSX
  - Sử dụng thuộc tính className cho JSX như class của một thẻ html thông thường.
  ```
  const element = <div className="Hello">Hello</div>
  ```
  - Inline style
  ```
  const divStyle = {
    color: 'blue'
  };

  function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>;
  }
  ```
  * [ ] Understand what is JSX Comment <br>
  ```
  <div>
    {/* Comment goes here */}
    Hello, {name}!
  </div>
  ```
  * [ ] Practice put JSX Comment
  * [ ] Understand Naming Convention of JSX <br>
  Tên của các component được viết theo kiểu Pascal Case(viết hoa kí tự đầu tiên của mỗi từ).
  * [ ] Know why class and for of HTML is not the same in JSX <br>
  Để tránh trùng lặp với các từ khóa trong JXS. Ta có thể dùng className thay cho class, htmlFor thay cho for.
  * [ ] Practice know how to iterating & rendering list in React: http://jasonjl.me/blog/2015/04/18/rendering-list-of-elements-in-react-with-jsx/
## 1.6 State [0%]
  * [ ] Understand State in React (what, why and how it work?) <br>
  State biểu diễn trạng thái của component, state là private chỉ có thể thay đổi bên trong bản thân của chính component đó. 
  * [ ] Know how to change State of a Component via user input or programmatically <br>
  Để thay đổi state của một component bằng cách sử dụng this.setState().
  ```
   class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: ''
      };
      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
     this.setState({name: e.target.value});
   }

   render() {
     return (
       <div>
         <input type='text' onChange={this.onChange} />
         <h1>{this.state.name}</h1>
       </div>
     );
   }
 }
 ```
 Ở đoạn code khởi tạo state với name: ''.
 Function onChange được gọi mỗi khi giá trị input thay đổi và nó sẽ setState name bằng giá trị input.
 Mỗi khi state.name thay đổi thì thẻ h1 sẽ được render lại.
## 1.7 Props [0%]
  * [ ] Understand Props in React <br>
  Props có thể hiểu là thuộc tính của component, props có thể thể là function, object, string, number,... Props là bất biến, không thể thay đổi.
  ```
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return (
      <div>
        <Welcome name="Sara" />        // Hello, Sara
        <Welcome name="Cahal" />       // Hello, Cahal
        <Welcome name="Edite" />       // Hello, Edite
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  ```
  * [ ] Understand why use props to create "reusable components" <br>
  * [ ] Can we set default value for a Prop <br>
  Để set default value cho props bằng cách sử dụng thuộc tính defaultProps
  ```
  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  // Specifies the default values for props:
  Greeting.defaultProps = {
    name: 'Stranger'
  };

  // Renders "Hello, Stranger":
  ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
  );
  ```
## 1.8 Props Validation [0%]
  * [ ] Understand what is validation <br>
  Validation props dùng để chắc chắn kiểu dữ liệu của props. Nếu kiểu dữ liệu của props không đúng thì sẽ có cảnh báo.
  * [ ] Know how to validate Props in React <br>
  Để validate props trong react sử dụng propTypes.
  ```
  import PropTypes from 'prop-types';

  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  Greeting.propTypes = {
    name: PropTypes.string
  };
  ```
## 1.9 Component Lifecycle Methods [%]
  * [ ] Understand what is lifecycle methods <br>
  Một component sẽ có 4 lifecycle được thực hiện theo thứ tự: <br>
  - constructor(): được gọi khi một component được khởi tạo. Ta có thể thiết lập state ban đầu và ràng buộc các class method. <br>
  - componentWillMount(): giai đoạn chuẩn bị render component lần đầu, chỉ sử dụng một lần. <br>
  - render(): phương thức này là bắt buộc và trả về là các thành phần của component.
  - componentDidMount(): giai đoạn sau khi render component lần đầu.
  * [ ] Understand why we need lifecycle methods <br>
  * [ ] Understand 7 lifecycle methods of React Component (http://busypeoples.github.io/post/react-component-lifecycle/) <br>
  * [ ] Understand componentDidMount = where you do DOM manipulation & AJAX request <br>
  * [ ] Understand componentWillMount = clean up after your React components gets destroyed <br>
  * [ ] Practice: create a Component that have 7 lifecycle methods and observe the behaviour <br>
## 1.10 Forms [%]
  * [ ] Understand how to to forms in React <br>
## 1.11 Events [%]
  * [ ] Understand how to handle events in React such as: click event on a button, keypress event on a input <br>
## 1.12 Refs [%]
  * [ ] Understand refs = how to acess DOM nodes within your React Component (https://reactjs.org/docs/refs-and-the-dom.html#the-ref-string-attribute) <br>
  * [ ] Practice use refs to access a div and change style add text to it <br>
## 1.13 Mixins [0%]
  * [ ] Understand mixins = reuse methods across multiple components (https://reactjs.org/docs/components-and-props.html#mixins) <br>
## 1.14 Practice [0%]
  * [ ] Build Countdown app using React
  * [ ] Build Todo app using React
