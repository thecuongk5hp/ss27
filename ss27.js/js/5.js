function timPhanTuDocNhat(arr) {
    let demPhanTu = {};
    for (let i = 0; i < arr.length; i++) {
        let phanTu = arr[i];
        demPhanTu[phanTu] = (demPhanTu[phanTu] || 0) + 1;
    }
    let phanTuDocNhat = arr.find(phanTu => demPhanTu[phanTu] === 1);
    return phanTuDocNhat;
}
let mang = [1, 2, 3, 4, 5, 2, 3, 4, 6, 7];
let phanTuDocNhat = timPhanTuDocNhat(mang);
console.log("Phần tử đầu tiên là độc nhất trong mảng: " + phanTuDocNhat);
