export default class Food {
  constructor(id, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh) {
    this.id = id;
    this.ten = ten;
    this.loai = loai;
    this.gia = gia;
    this.khuyenMai = khuyenMai;
    this.tinhTrang = tinhTrang;
    this.moTa = moTa;
    this.hinhAnh = hinhAnh;
  }

  giaKhuyenMai = function () {
    return this.gia * (1 - (this.khuyenMai * 1) / 100);
  };
}
