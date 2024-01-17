function mangConPhanBiet(mang) {
    let mangCon = [];
    for (let i = 0; i < mang.length; i++) {
        if (!mangCon.includes(mang[i])) {
            mangCon.push(mang[i]);
        }
    }
    return mangCon;
}
let mangDaKhaiBao = [1, 4, 2, 1, 3, 4, "f"];
let ketQuaMangCon = mangConPhanBiet(mangDaKhaiBao);
console.log("Mảng con chỉ chứa các phần tử phân biệt:");
console.log(ketQuaMangCon);