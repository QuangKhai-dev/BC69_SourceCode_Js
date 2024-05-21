// Tạo hằng số lưu lại các giá trị từ loai xe giúp bảo trì code tốt hơn
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

let tinhGiaKmDauTien = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};

let tinhGiaKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};

let tinhGiaKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};

let tinhGiaThoiGianCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};

// Thực hiện tạo một hàm kiểm tra lấy giá tiền km từ 1 đến 19
// Thực hiện tạo một hàm kiểm tra lấy giá tiền km từ 19km trở đi
// Thực hiện tạo một hàm kiểm tra lấy giá tiền thời gian chờ

//NV1. Thực hiện tạo một sự kiện onclick tới nút button tính tiền
document.querySelector(".contact100-form-btn").onclick = function () {
  // NV2. Thực hiện lấy dữ liệu, loại xe ng dùng đi, số Km, số thời gian chờ
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let inputLoaiXe = document.querySelector("input[type='radio']:checked");
  if (!inputLoaiXe) {
    alert("Vui lòng chọn loại xe");
    return;
  }
  let loaiXe = document.querySelector("input[type='radio']:checked").value;

  let giaKmDauTien = tinhGiaKmDauTien(loaiXe);
  let giaKmTu1Den19 = tinhGiaKmTu1Den19(loaiXe);
  let giaKmTu19TroLen = tinhGiaKmTu19TroLen(loaiXe);
  let giaThoiGianCho = tinhGiaThoiGianCho(loaiXe);
  console.log(giaKmDauTien);
  let tongTien = 0;
  // TH1 : Khách hàng đi trong khoảng từ 1 đến 19km ==> giaKmDauTien + (soKm - 1) * giaKmTu1Den19
  // TH2: : ==> giaKmDauTien + 18 * giaKmTu1Den19 + (soKm - 19) * giaKmTu19TroLen
  if (soKm <= 19) {
    tongTien = giaKmDauTien + (soKm - 1) * giaKmTu1Den19;
  } else {
    tongTien =
      giaKmDauTien + 18 * giaKmTu1Den19 + (soKm - 19) * giaKmTu19TroLen;
    // làm tròn tới số nguyên (làm tròn xuống)
  }
  // 8 ==> Math.floor((thoiGianCho - 3) / 3)
  // TH1 : thời gian chờ chưa đủ 3p
  // TH2 : Thời gian chờ lớn hơn 3p
  // if ()
  console.log(tongTien);
  // DOM tới div có id divThanhTien và hiển thị lên giao diện
  document.getElementById("divThanhTien").style.display = "block";
  // DOM tới thẻ span có id xuatTien và hiển thị tongTien lên (nhớ chuyển đổi về kiểu tiền tệ việt nam)
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );
  // DOM tới modal body và thêm table vào
  document.querySelector("#exampleModal .modal-body").innerHTML = `
  <div
  class="table-responsive"
>
  <table
    class="table table-primary"
  >
    <thead>
      <tr>
        <th scope="col">${1}</th>
        <th scope="col">Column 2</th>
        <th scope="col">Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <td scope="row">R1C1</td>
        <td>R1C2</td>
        <td>R1C3</td>
      </tr>
      <tr class="">
        <td scope="row">Item</td>
        <td>Item</td>
        <td>Item</td>
      </tr>
    </tbody>
  </table>
</div>`;
  $("#exampleModal").modal("show");
};

// toFixed giúp làm tròn số thập phân
// console.log((8.65).toFixed(2));
