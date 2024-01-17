function xoaPhanTuLe(arr) {
    let mangMoi = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            mangMoi.push(arr[i]);
        }
    }
    return mangMoi;
}
let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mangMoi = xoaPhanTuLe(mangSoNguyen);
console.log("Mảng mới sau khi xóa tất cả các phần tử lẻ:");
console.log(mangMoi);
