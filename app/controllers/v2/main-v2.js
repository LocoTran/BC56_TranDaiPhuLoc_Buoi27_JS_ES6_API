import foodServ from "../../service/service.js";
import {
  getDataForm,
  onSuccess,
  renderFoodList,
  showDataToForm,
} from "./controller-v2.js";

//////////////////// In ra table ////////////////////
let fetchFoodList = () => {
  foodServ
    .getList()
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};
fetchFoodList();

//////////////////// Delete Food ////////////////////
window.deleteFood = (id) => {
  foodServ
    .deleteFood(id)
    .then((res) => {
      fetchFoodList();
      onSuccess("Xóa thành công");
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};

//////////////////// Edit food ////////////////////
window.editFood = (id) => {
  document.getElementById("exampleModalLabel").innerText = "Sửa món ăn";
  document.getElementById("btnThemMon").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "block";
  document.getElementById("foodID").setAttribute("readonly", "");

  foodServ
    .getDetail(id)
    .then((res) => {
      $("#exampleModal").modal("show");
      showDataToForm(res.data);
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};

//////////////////// Reset Food form ////////////////////
document.getElementById("btnReset").onclick = () => {
  let idFood = document.getElementById("foodID").value;
  document.getElementById("foodForm").reset();
  document.getElementById("foodID").value = idFood;
};

//////////////////// Update food ////////////////////
document.getElementById("btnCapNhat").onclick = () => {
  let updFood = getDataForm();
  foodServ
    .updateFood(updFood.id, updFood)
    .then((res) => {
      fetchFoodList();
      $("#exampleModal").modal("hide");
      onSuccess("Cập nhật món thành công");
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};

//////////////////// Add food ////////////////////
document.getElementById("btnThem").onclick = () => {
  document.getElementById("exampleModalLabel").innerText = "Thêm món mới";
  document.getElementById("btnThemMon").style.display = "block";
  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("foodID").removeAttribute("readonly");
};

document.getElementById("btnThemMon").onclick = () => {
  let food = getDataForm();

  foodServ
    .addFood(food)
    .then((res) => {
      fetchFoodList();
      onSuccess("Thêm món thành công");
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};

//////////////////// Show food ////////////////////
document.getElementById("selLoai").onchange = () => {
  let keyword = document.getElementById("selLoai").value;
  let arrLoai = [];

  foodServ
    .getList()
    .then((res) => {
      if (keyword == "all") {
        fetchFoodList();
      } else if (keyword == "loai1") {
        let data = res.data;
        data.forEach((item) => {
          if (item.loai == true) {
            arrLoai.push(item);
          }
        });
        renderFoodList(arrLoai);
      } else if (keyword == "loai2") {
        let data = res.data;
        data.forEach((item) => {
          if (item.loai == false) {
            arrLoai.push(item);
          }
        });
        renderFoodList(arrLoai);
      }
    })
    .catch((err) => {
      console.log("🚀👾👽 ~ err:", err);
    });
};
