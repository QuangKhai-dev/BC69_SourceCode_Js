// hiển thị nội dung lên console
console.log("Hello BC69");
// hiển thị lỗi lên console
console.error("Tài khoản chưa chính xác");
// hiển thị cảnh báo lên console
console.warn("Vui lòng kiểm tra kĩ thông tin");

// Kiểu dữ liệu và biến
// một số lưu ý khi tạo biến
// 1. Tuân thủ cấu trúc camel case (xin chao) ==> doQuangKhai
// 2. Khi đặt tên biến không chứa khoảng cách và dấu (-), khi muốn tạo khoảng cách có thể sử dụng dấu _
// 3. không sử dụng ký tự đặc biệt và không bắt đầu tên biến bằng số
// console.log(xinChao);
let xinChao = "Hello Nga";
xinChao = "Hello Sang";
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
let hoTen = "Lâm Văn Sơn"; // Kiểu dữ liệu chuỗi (string)
let diemToan = 8; // Kiểu dữ liệu số (number)

// Toán tử
let tong = (35 + 15) / 5;
console.log(tong);
// phép chia lấy dư
let soHangDonVi = 69 % 10;
console.log(soHangDonVi);
let soChan = 130 % 2;
console.log(soChan);

// Phép tăng và phép giảm
let diemVan = 6;
++diemVan;
console.log(diemVan);
let diemTong = diemToan + diemVan++;
console.log(diemTong); //

let bienA = 35;
let bienC = 15;
let bienB = 10;
bienC++;
// bienA = 35; bienC = 16; bienB =10
let phepTinh1 = bienA + bienB++ - bienC;
// console.log(phepTinh1); bienA = 35; bienB = 11; bienC = 16
let phepTinh2 = ++bienA / 2 - bienB++ - bienC;
// console.log(phepTinh2); bienA = 36; bienB = 12; bienC = 16
let phepTinh3 = --bienB / 3 + ++bienA - bienC;
// console.log(phepTinh3); bienA = 37;bienB = 11;bienC = 16

let diemTrungBinh = 8 + "9"; // 300000 + "300000" ==> "300000300000"
console.log(typeof bienA);
let monAn = "Sủi cảo";
monAn = "Mì Sủi Cảo";
console.log(monAn);

let soTien = 2000 + 8000;
// soTien = soTien + 5000;
soTien += 5000;
let diemSinh = 6;
// diemSinh += 1;
diemSinh = diemSinh + 1;
// soTien = soTien - 10000;
soTien -= 300000;
// soTienMoi = soTien - 300000;
console.log(soTien);

const heSoLuongGiamDoc = 3;
// heSoLuongGiamDoc = 10;
// console.log(Math.PI);
const soGioCoDinh = 40;

/** Mô hình 3 khối cho bài tập tính tiền lương nhân viên
 *
 * Đầu vào:
 *  - Lương 1 ngày = 100000
 *  - Số ngày người nhân viên làm việc
 *
 * Các bước xử lí:
 *  Thực hiện sử dụng công thức lấy số ngày làm * số lương 1 ngày ==> tổng tiền lương
 *
 *
 * Đầu ra:
 *  - Số tiền lương nhân viên dựa trên số lương và số ngày làm
 *
 */

const soLuongMotNgay = 100000;
let soNgayLamViec = 24;
let tongTienLuong = soLuongMotNgay * soNgayLamViec;
console.log(tongTienLuong);
