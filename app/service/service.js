let BASE_URL = "https://64d882525f9bf5b879ce4b1a.mockapi.io/food";

let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let deleteFood = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};

let getDetail = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let updateFood = (id, updPro) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: updPro,
  });
};

let addFood = (food) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  });
};

let foodServ = {
  getList,
  deleteFood,
  getDetail,
  updateFood,
  addFood,
};

export default foodServ;
