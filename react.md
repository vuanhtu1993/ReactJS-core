> React is a JavaScript library for creating user interfaces.
> Its core principles are declarative code, efficiency, and flexibility
>. Simply specify what your component looks like and
> React will keep it up-to-date when the underlying data changes.

### React là gì ?
1. React là một thư viện Javascript giúp bạn xây dựng tầng Views 
(thường được xem như là chữ V trong mô hình MVC)
. React có thể  xây dựng website hoàn toàn sử dụng Javascript (để thao tác với HTML)
Lập trình theo kiểu khai báo => chỉ quan tâm đến đầu ra, máy tính tự phải làm các bước để phục vụ việc này 
(This is "declarative" programming focus on result)

### Tại sao lại sử dụng React
1. Tốc độ cao do thư viện nhỏ gọn, virtual dom, 
2. Tạo ra 2 DOM ảo, 1 DOM cũ và 1 DOM mới 
=> tìm số bước nhỏ nhất để update lên DOM thật

### JSX là gì ?
1. Cú pháp của react thuần dài và dex nhầm lẫn nên => sinh ra JSX

### Create React App
1. Là một tool để tạo ra một khung chương trinh React (giống Angular CLI)
 
### Component trong React
1. Nhưng là hàm trong JS có đầu vào và đầu ra, tái sử dụng ở bất cứ đâu
2. Cái gì trả về từ method render thì được hiển thị ra View
3. Các cách khai báo Component
- ```javascript
    // Stateful (Để tương tác với người dùng)
    import React from 'react'; 
    class MyButton extends Component {
    render() {
      return (
          <div>
              <button>Button1</button>
          </div>
          )
      }
  }

    // Stateless (chỉ để show dữ liệu)
    import React from 'react';
    export default function () {
      return (
        
      )  
    }
 ```