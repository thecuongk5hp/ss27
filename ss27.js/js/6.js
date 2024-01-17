function mangNgauNhien(arr) {
    let mangSapXep = arr.sort(() => Math.random() - 0.5);
    return mangSapXep;
}
let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mangSapXep = mangNgauNhien(mang);
console.log("Mảng sau khi sắp xếp ngẫu nhiên:");
console.log(mangSapXep);
