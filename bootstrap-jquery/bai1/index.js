let currentSelectedIndex = -1;
$(document).ready(function () {
  // Khởi tạo danh sách xe ban đầu
  const danhSachXe = [
    // {
    //   tenXe: "Toyota Camry",
    //   hinhAnh:
    //     "https://cdn.tgdd.vn/Files/2021/12/13/1338592/toyota-camry-2022-cover-620x413.jpg",
    //   hangXe: "Toyota",
    //   giaTien: 1200000000,
    //   moTa: "Sedan hạng D được ưa chuộng",
    //   nguoiLienHe: "Trần Văn A",
    //   soDienThoai: "0123456789",
    //   email: "tranvana@gmail.com",
    // },
  ];

  // Hiển thị danh sách xe ban đầu
  renderDanhSach(danhSachXe);

  // Bắt sự kiện submit form nhập thông tin
  $("#form-nhap-thong-tin").submit(function (e) {
    e.preventDefault();

    const tenXe = $("#ten-xe").val().trim();
    const hinhAnh = $("#hinh-anh").val().trim();
    const hangXe = $("#hang-xe").val().trim();
    const giaTien = parseInt($("#gia-tien").val().trim());
    const moTa = $("#mo-ta").val().trim();
    const nguoiLienHe = $("#nguoi-lien-he").val().trim();
    const soDienThoai = $("#so-dien-thoai").val().trim();
    const email = $("#email").val().trim();

    // Kiểm tra dữ liệu
    if (
      !tenXe ||
      !hangXe ||
      !giaTien ||
      !nguoiLienHe ||
      !soDienThoai ||
      !email
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Thêm dữ liệu mới vào danh sách
    const xeMoi = {
      tenXe,
      hinhAnh,
      hangXe,
      giaTien,
      moTa,
      nguoiLienHe,
      soDienThoai,
      email,
    };
    danhSachXe.push(xeMoi);

    // Hiển thị danh sách xe cập nhật
    renderDanhSach(danhSachXe);

    // Xóa dữ liệu đã nhập
    $("#form-nhap-thong-tin")[0].reset();
  });

  // Bắt sự kiện click vào một dòng trong bảng quản lý
  $("#tbody-danh-sach").on("click", "tr", function () {
    const index = $(this).index();
    currentSelectedIndex = index;
    const xe = danhSachXe[index];

    // Hiển thị thông tin xe được chọn
    loadForm(xe);

    // Bật nút xóa
    $("#btn-xoa").prop("disabled", false);
  });

  // Bắt sự kiện click nút xóa
  $("#btn-xoa").click(function () {
    const index = currentSelectedIndex;
    if (index === -1) {
      return;
    }

    // Xác nhận xóa
    if (confirm("Xác nhận xóa xe này?")) {
      danhSachXe.splice(index, 1);
      renderDanhSach(danhSachXe);

      // Tắt nút xóa
      $("#btn-xoa").prop("disabled", true);

      // Xóa thông tin xe
      clearForm();
    }
  });

  // Bắt sự kiện tìm kiếm
  $("#tim-kiem").on("keyup", function () {
    const searchTerm = $(this).val().trim().toLowerCase();

    const danhSachTimKiem = danhSachXe.filter(function (xe) {
      return (
        xe.tenXe.toLowerCase().includes(searchTerm) ||
        xe.hangXe.toLowerCase().includes(searchTerm) ||
        xe.moTa.toLowerCase().includes(searchTerm)
      );
    });

    renderDanhSach(danhSachTimKiem);
  });
});

// Hàm hiển thị danh sách xe
function renderDanhSach(danhSach) {
  $("#tbody-danh-sach").empty();

  danhSach.forEach((xe, index) => {
    var $row = $("<tr>").attr("data-index", index);
    $row.append($("<td>").text(index + 1));
    $row.append(
      $("<td>").append(
        $("<img>")
          .attr("src", xe.hinhAnh)
          .attr("alt", xe.tenXe)
          .attr("width", "50")
      )
    );
    $row.append($("<td>").text(xe.tenXe));
    $row.append($("<td>").text(xe.hangXe));
    $row.append(
      $("<td>").text(
        xe.giaTien.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })
      )
    );
    $row.append($("<td>").text(xe.nguoiLienHe));
    $row.append($("<td>").text(xe.soDienThoai));
    $row.append($("<td>").text(xe.email));

    $("#tbody-danh-sach").append($row);
  });
}

// Function to load form with selected car's data
function loadForm(xe) {
  $("#ten-xe").val(xe.tenXe);
  $("#hinh-anh").val(xe.hinhAnh);
  $("#hang-xe").val(xe.hangXe);
  $("#gia-tien").val(xe.giaTien);
  $("#mo-ta").val(xe.moTa);
  $("#nguoi-lien-he").val(xe.nguoiLienHe);
  $("#so-dien-thoai").val(xe.soDienThoai);
  $("#email").val(xe.email);
}

// Function to clear form
function clearForm() {
  $("#ten-xe").val("");
  $("#hinh-anh").val("");
  $("#hang-xe").val("");
  $("#gia-tien").val("");
  $("#mo-ta").val("");
  $("#nguoi-lien-he").val("");
  $("#so-dien-thoai").val("");
  $("#email").val("");
}

// Function to validate form
function validateForm() {
  const tenXe = $("#ten-xe").val().trim();
  const hangXe = $("#hang-xe").val().trim();
  const giaTien = parseInt($("#gia-tien").val().trim());
  const nguoiLienHe = $("#nguoi-lien-he").val().trim();
  const soDienThoai = $("#so-dien-thoai").val().trim();
  const email = $("#email").val().trim();

  if (!tenXe || !hangXe || !giaTien || !nguoiLienHe || !soDienThoai || !email) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return false;
  }

  return true;
}
