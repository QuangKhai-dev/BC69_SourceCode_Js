// Xử lí chức năng tính toán điểm trung bình cho sinh viên với 3 môn Toán Lý Hoá

let monToan = 3;
let monLy = 7;
let monHoa = 9;
// Hàm có tham số
function tinhDiemTrungBinh(diemToan, diemLy, diemHoa) {
  console.log("Điểm Toán", diemToan);
  console.log("Điểm Lý", diemLy);
  console.log("Điểm Hoá", diemHoa);
  // Nơi xử lí các hành động khi hàm được thực thi
  let diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;
  console.log(diemTrungBinh);
  if (diemTrungBinh > 7) {
    return diemTrungBinh;
  } else {
    return "Học sinh điểm không tốt";
  }
  console.log("huhu");
}
// thực thi hàm tinhDiemTrungBinh
// Các giá trị được truyền vào là đối số

let sinhVienVinh = tinhDiemTrungBinh(monLy, monToan, monHoa);
console.log(sinhVienVinh);
tinhDiemTrungBinh(4, 5, 1);
tinhDiemTrungBinh();

// function literal
// Số tiền, % giảm giá, nếu không đưa giảm giá, mặc định các món giảm 10% ==> mỗi món ăn sẽ giảm giá bao nhiêu
// tinhTienGiamGia();
// Kỹ thuật của es6 (Default Parameter)
console.clear();
let tinhTienGiamGia = function (giaMon, giamGia = 10) {
  //clg
  // TH1 : nếu có giá trị thì tính toán giảm giá dựa dữ liệu
  // TH2: nếu tham số undifined thì sẽ tính mặc định giảm giá là 10%
  // false
  // if (!giamGia) {
  //   // console.log("Tôi không có giảm giá");
  //   // gán vào tham số giảm giá một dữ liệu mặc định khi người dùng không truyền dữ liệu
  //   giamGia = 10;
  // }
  console.log("Tôi là hàm tính giảm giá");
  return giaMon * (giamGia / 100);
};
let giamGiaBanhMi = tinhTienGiamGia(30000, 30);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
tinhTienGiamGia(50000);
console.log(giamGiaBanhMi);

// arrowFunction
// không có cơ chế hosting
// tên sinh viên, số tuổi
// dạng arrow Function đặc biệt
function hello(hoTen) {
  return `Tôi tên là ${hoTen}`;
}
let hienThiCauChao = (hoTen = "Vinh Pro") => `Tôi tên là ${hoTen}`;
hienThiCauChao("Quang Khải");
