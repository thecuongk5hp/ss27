function mangCL(arr) {
    let mangChan = [];
    let mangLe = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            mangChan.push(arr[i]);
        } else {
            mangLe.push(arr[i]);
        }
    }
    return { mangChan, mangLe };
}
let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ketQuaChiaMang = mangCL(mangSoNguyen);
console.log("Mảng số chẵn:");
console.log(ketQuaChiaMang.mangChan);
console.log("Mảng số lẻ:");
console.log(ketQuaChiaMang.mangLe);
