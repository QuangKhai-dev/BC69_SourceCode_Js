// Câu lệnh DOM
// câu lệnh giúp thay đổi nội dung thẻ html
let theH1 = document.getElementById("demo");
console.log(theH1);
theH1.innerHTML = "Hello BC69";
// câu lệnh giúp thay đổi css của thẻ html
document.getElementById("demo").style.backgroundColor = "red";

// Yêu cầu: Thực hiện DOM tới thẻ h2 có id là demo2 và lưu trữ vào bên trong một biến tự đặt tên
// - Truy cập vào thẻ h2 và thay đổi nội dung thành Tôi đang ở Quận 3
// - Truy cập vào thẻ h2 và thay đổi css thành nền đen chữ trắng
let theH2 = document.getElementById("demo2");
theH2.innerHTML = "Tôi đang ở quận 3";
theH2.style.backgroundColor = "black";
theH2.style.color = "white";
theH2.style.padding = "10px 20px";

let theH3 = document.getElementById("demo3");
// thứ nhất thực hiện lưu trữ nội dung cũ của thẻ h3
// let contentH3 = theH3.innerHTML;
// console.log(contentH3);
// theH3.innerHTML = contentH3 + " Đỗ Quang Khải";

// Phiên bản rút gọn
theH3.innerHTML += " Đỗ Quang Khải";

// Tương tác lưu trữ giá trị từ các thuộc tính
let theHinhAnh = document.getElementById("theHinhAnh");
theHinhAnh.src =
  "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-doremon-cute-7.jpg";

// Tương tác lấy các class có từ thẻ html
// document sẽ đại diện cho toàn bộ file html mà chúng ta đang có
document.title = "Sang bờ rồ";
let classCuaHinhAnh = theHinhAnh.className;
theHinhAnh.className = classCuaHinhAnh + " chieuCao";
console.log(classCuaHinhAnh);

// Thực hiện truy cập tới thẻ html thông qua selector
document.querySelector("#demo2").innerHTML = "Hehe a Sang bị lừa";

// Với trường hợp sử dụng querySelector, khi viết cần chú ý trường hợp selector thoả mãn nhiều thẻ thì nó sẽ lấy thẻ đầu tiên thoả mãn yêu cầu
document.querySelector(".container p").innerHTML = "Biết tại sao sai không";

// Thao tác lấy dữ liệu từ input

document.querySelector(".btn-dark").onclick = function () {
  // Những sự kiện sẽ xử lí khi button được click sẽ nằm ở đây
  console.log("Tôi vừa bị bấm");
  let taiKhoan = document.getElementById("taiKhoan");
  let duLieuInputTaiKhoan = taiKhoan.value;
  console.log(duLieuInputTaiKhoan);
  // Yêu cầu : THực hiện lấy dữ liệu từ input mật khẩu
  let matKhau = document.getElementById("matKhau");
  let duLieuMatKhau = matKhau.value;
  console.log(duLieuMatKhau);
  alert(
    "Tài khoản: " + duLieuInputTaiKhoan + " " + "Mật Khẩu: " + duLieuMatKhau
  );
};

// Yêu cầu bài tập bật tắt bóng đèn
// - Việc bật tắt bóng đèn thật chất là việc chuyển đổi hình của thẻ img có id hinhBongDen giữa tấm buloff và bulon
// 1. Viết một sự kiện onclick cho nút button có id btnTatDen
// 2. Viết xử lí bên trong sự kiện onclick của nút tắt đèn thực hiện thay đổi tấm hình của thẻ img thành tấm buloff
// 3. Viết một sự kiện onclick cho nút button có id btnBatDen
// 4. Viết xử lí bên trong sự kiện onclick của nút bật đèn thực hiện thay đổi tấm hình của thẻ img thành tấm bulon
// 5. (Mở rộng): Suy nghĩ cách tối ưu câu lệnh dom cho việc gọi tới thẻ img
let hinhBongDen = document.getElementById("hinhBongDen");
document.getElementById("btnTatDen").onclick = function () {
  // Lưu ý khi đi đường dẫn cho thuộc tính src nhớ lưu ý là đi bắt đầu từ file html tới vị trí lưu trữ hình
  hinhBongDen.src = "./img/pic_bulboff.gif";
};

document.getElementById("btnBatDen").onclick = function () {
  hinhBongDen.src = "./img/pic_bulbon.gif";
};

document.querySelector(".btn-success").onclick = function () {
  // thực hiện bật tắt một class
  document.querySelector("body").classList.toggle("dark");
};

document.getElementById("btnDemo").onclick = function () {
  // document.querySelector(".demoClassList").className += " Hehe";
  // document.querySelector(".demoClassList").classList.remove("demoClassList");
};

// Tương tác tạo html từ js

// sự kiện onmouseenter và onmouseleave và onmousemove
// document.getElementById("hinhBongDen").onmouseenter = function () {
//   console.log("Người dùng đã kéo chuột vào vùng hiển thị");
//   hinhBongDen.src = "./img/pic_bulbon.gif";
// };

// sự khác biệt giữa onmouseenter và onmouseleave là onmouseenter sẽ bắt được hành vi người dùng di chuyển chuột vào phẩn tử trong lần đầu tiên còn onmouseleave sẽ kích hoạt liên tục
document.getElementById("hinhBongDen").onmousemove = function () {
  console.log("Tôi đang chạy onmousemove");
  hinhBongDen.src = "./img/pic_bulbon.gif";
};

document.getElementById("hinhBongDen").onmouseleave = function () {
  hinhBongDen.src = "./img/pic_bulboff.gif";
};

document.getElementById("hinhBongDen").ondblclick = function () {
  console.log("Tôi vừa bị double click");
};

// Tạo html từ js
// let theH2Moi = document.createElement("h2");
// theH2Moi.innerHTML = "Tôi test tí";
// theH2Moi.className = "bg-success text-white";
// console.log(theH2Moi);

// document.querySelector(".noiDungHienThi").appendChild(theH2Moi);
let quangKhai = "Quang Khải";
// let noiDung = document.querySelector(".noiDungHienThi").innerHTML;
document.querySelector(
  ".noiDungHienThi"
).innerHTML += `<div>${quangKhai}</div>`;
console.log(noiDung);
// string template
// `Tôi tên là: ${hoTen} với mật khẩu là ${matKhau}`;
// "Tôi tên là: " + hoTen + " với mật khẩu là: " + matKhau
// "Tôi tên là: " + quangKhai;
