// Giải Thích Đoạn Code
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers;
// newArr.push(8);
// console.log(newArr);
// console.log(numbers);
// 1.numbers và newArr đều tham chiếu đến cùng một mảng [1, 2, 3, 4, 5].
// 2.Khi newArr.push(8) được thực hiện, nó ảnh hưởng đến mảng được tham chiếu bởi cả hai biến.
// 3.Kết quả in ra màn hình sẽ là newArr và numbers đều là [1, 2, 3, 4, 5, 8].



// Tạo Mảng Mới không Liên Quan:
// Để tạo một mảng mới không liên quan đến mảng cũ, chúng ta có thể sử dụng phương thức slice() hoặc concat():

// Sử dụng slice():
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers.slice();
// newArr.push(8);
// console.log(newArr);  // [1, 2, 3, 4, 5, 8]
// console.log(numbers);  // [1, 2, 3, 4, 5]

// Sử dụng concat():
// let numbers = [1, 2, 3, 4, 5];
// let newArr = [].concat(numbers);
// newArr.push(8);
// console.log(newArr);  // [1, 2, 3, 4, 5, 8]
// console.log(numbers);  // [1, 2, 3, 4, 5]

// Cả hai cách trên đều tạo một bản sao mới của mảng,
// không liên quan đến mảng cũ, đồng thời thay đổi giá trị của mảng mới không ảnh hưởng đến mảng cũ.
