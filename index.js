// Global Scope

let diemToanCuaLam = 8;
let diemToanCuaVinh = 8;
let hoTenKhai = "đình sang";
let hoTenSang = "Đình Sang";

let diemVan = "8";
// ==> "đình sang"
let ketQua = diemToanCuaLam == diemVan;
let ketQua2 = hoTenKhai == hoTenSang;
console.log(ketQua);

// so sánh khác (!=)
let ketQua3 = diemToanCuaLam != hoTenKhai;
console.log(ketQua3);

// so sánh bằng giá trị và kiểu (===)
let ketQua4 = diemToanCuaVinh === diemToanCuaLam;
console.log(ketQua4);

// so sánh khác giá trị hoặc kiểu (!==)
let ketQua5 = diemVan !== hoTenSang;
console.log(ketQua5);

// 8 > 6 ==> true
// 123 > 500 ==> false

// Toán tử phủ định (!)
let emDung = true;
console.log(!emDung);
console.log(emDung);

// emDung && <div></div>

// Toán tử và (&&)
let diemSinh = 8;
let monAn = "Sủi cảo";
// kiểm tra nếu như diemSinh trên 8 và monAn là sủi cảo thì trả về true
let ketQua6 = diemSinh >= 8 && monAn == "Sủi cảo" && 3 * 3 > 10;
console.log(ketQua6);

//Toán tử hoặc (||)
// kiểm tra nếu như diemSinh trên 8 hoặc monAn là sủi cảo thì trả về true
let ketQua7 = diemSinh > 8 || monAn == "sủi cảo" || 3 * 3 > 10;
console.log(ketQua7);

// Chảo chiên không dính ==> loại bỏ dấu câu ==> Chao chien khong dinh
// Chao chien khong dinh

document.getElementById("btnSoTienLai").onclick = function () {
  let soTienPhaiTra = +document.getElementById("soTienPhaiTra").value;
  let soTienDaTra = document.getElementById("soTienDaTra").value * 1;

  // Cấu trúc điều kiện để kiểm tra
  // Th1: chưa trả đủ
  // Th2: đã trả đủ
  let theContainer = document.querySelector(".container");
  // tạo một thẻ p để hiển thị thông báo
  let theP = document.createElement("p");
  theP.className = "bg-success bg-opacity-75 text-white p-3";

  // if (soTienDaTra < soTienPhaiTra) {
  //   theP.innerHTML = (soTienPhaiTra - soTienDaTra) * (1.5 / 100);
  // }
  // if (soTienDaTra == soTienPhaiTra) {
  //   theP.innerHTML = "Quý khách đã thanh toán xong, cảm ơn sử dụng dịch vụ";
  // }

  // Xử lí với cấu trúc điều kiện if else
  if (soTienDaTra == soTienPhaiTra) {
    theP.innerHTML = "Quý khách đã thanh toán xong, cảm ơn sử dụng dịch vụ";
  } else {
    // xử lí khi số tiền trả thiếu hoặc dư
    let tienLai = (soTienPhaiTra - soTienDaTra) * (1.5 / 100);
    theP.innerHTML = tienLai.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  }

  theContainer.appendChild(theP);
};

// Yêu cầu bài tập tính lương theo giờ
// nếu giờ bé hơn hoặc = 40h thì công thức sẽ là số lương * số giờ
// nếu giờ lớn hơn 40 thì công thức tính lương sẽ là (40h * số lương) + (thời gian còn dư * số lương *1.5)
// sau khi tính toán xong, hiển thị kết quả người dùng vào giao diện div có id ketQuaBaiTap2 với kiểu nội dung như nhân viên này có số giờ làm là ..., nhân viên (chăm chỉ hoặc không chăm chỉ), số tiền lương tháng này là ....
let tongTienLuong = 0;
document.getElementById("btnTinhLuong").onclick = function () {
  // xử lí lấy dữ liệu người dùng
  // Function Scope
  let soTienLuong = document.getElementById("soTienLuong").value * 1;
  let soGioLam = document.getElementById("soGioLam").value * 1;
  let tongTienLuong = 0;
  let xepLoaiNhanVien = "";
  if (soGioLam > 40) {
    xepLoaiNhanVien = "Chăm chỉ";
    tongTienLuong = 40 * soTienLuong + (soGioLam - 40) * soTienLuong * 1.5;
  } else {
    xepLoaiNhanVien = "Lười biếng";
    tongTienLuong = soGioLam * soTienLuong;
  }
  // hiển thị dữ liệu lên giao diện
  document.getElementById(
    "ketQuaBaiTap2"
  ).innerHTML = `Nhân viên này có số giờ làm là ${soGioLam}, là nhân viên ${
    soGioLam > 40 ? "Chăm chỉ" : "Lười biếng"
  }, số tiền lương trong tháng là ${tongTienLuong.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}`;
};

console.log(tongTienLuong);

// Xét danh hiệu cho sinh viên
// >8 ==> HSG
// <=8 && > 5 ==> HSK
// <= 5 > 3 ==> HSTB
// <=3 ==> HSY
let diemTongKet = 1;
let xepLoaiNhanVien =
  diemTongKet > 8
    ? "Học sinh giỏi"
    : diemTongKet <= 8 && diemTongKet > 5
    ? "Học sinh khá"
    : diemTongKet <= 5 && diemTongKet > 3
    ? "Học sinh trung bình"
    : "Học sinh yếu";

// Cấu trúc điều kiện else if
// DoQuangSang_BaiTapBuoi13_Bc69
if (diemTongKet > 8) {
  console.log("Học sinh giỏi");
} else if (diemTongKet <= 8 && diemTongKet > 5) {
  console.log("Học sinh khá");
} else if (diemTongKet <= 5 && diemTongKet > 3) {
  console.log("Học sinh trung bình");
} else {
  console.log("Học sinh yếu");
}

//
document.getElementById("btnCauChao").onclick = function () {
  let nguoiDung = document.getElementById("chonNguoiDung").value;
  console.log(nguoiDung);
  let content = "";
  // if (nguoiDung == "mẹ") {
  //   content = "Chào mừng mẹ iu xài máy";
  // } else if (nguoiDung == "chị") {
  //   content = "Cấm chị vô máy tính em xài";
  // } else {
  //   content = "Hello Ba đã xài máy tính";
  // }

  // Cấu trúc điều kiện switch case
  switch (nguoiDung) {
    case "mẹ":
      {
        console.log(1);
        content = "Chào mừng mẹ iu xài máy";
      }
      break;
    case "chị":
      {
        console.log(2);
        content = "Cấm chị vô máy tính em xài";
      }
      break;
    case "cha":
      {
        console.log(3);
        content = "Hello Ba đã xài máy tính";
      }
      break;
    default: {
      console.log(4);
      content = "Ai đang xài máy vậy";
    }
  }

  // dom tới thẻ div có class toast-body để thay thế nội dung
  document.querySelector(".toast-body").innerHTML = content;

  // Thực hiện dom tới toast layout của bootstrap
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
};
