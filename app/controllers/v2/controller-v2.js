let CON_MON = true;
let MON_CHAY = true;

//////////////////// Render food list ////////////////////
export let renderFoodList = (list) => {
  let contentHTML = "";

  list
    .reverse()
    .forEach(({ id, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `
        <tr>
        <td>${id}</td>
        <td>${ten}</td>
        <td>${loai == MON_CHAY ? "Chay" : "Mặn"}</td>
        <td>${gia}</td>
        <td>${khuyenMai}</td>
        <td>${gia * (1 - (khuyenMai * 1) / 100)}</td>
        <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
        <td>
        <button class="btn btn-danger" onclick="deleteFood(${id})">Xóa</button>
        <button class="btn btn-success" onclick="editFood(${id})">Sửa</button>
        </td>
        </tr>
        `;
      contentHTML += trString;
    });

  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

//////////////////// Show notification ////////////////////
export let onSuccess = (message) => {
  Swal.fire({
    position: "center-mid",
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1000,
  });
};

//////////////////// Show data to form ////////////////////

export let showDataToForm = (food) => {
  let { id, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = food;

  document.getElementById("foodID").value = id;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai;
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang;
  document.getElementById("hinhMon").value = moTa;
  document.getElementById("moTa").value = hinhAnh;
};

//////////////////// Get data from form ////////////////////

export let getDataForm = () => {
  let id = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let moTa = document.getElementById("hinhMon").value;
  let hinhAnh = document.getElementById("moTa").value;

  return {
    id,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    moTa,
    hinhAnh,
  };
};
