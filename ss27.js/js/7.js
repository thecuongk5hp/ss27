function taoMangChuoiCon(chuoi) {   
let mangChuoiCon = [];
for (let i = 0; i < chuoi.length; i++) {
    for (let j = i + 1; j <= chuoi.length; j++) {
        let chuoiCon = chuoi.substring(i, j);           
        mangChuoiCon.push(chuoiCon);
    }
}
return mangChuoiCon;
}
let chuoiNhap = prompt("Nhập vào chuỗi:");
let ketQuaMangChuoiCon = taoMangChuoiCon(chuoiNhap);
console.log("Mảng chứa tất cả chuỗi con của chuỗi '" + chuoiNhap + "':");
console.log(ketQuaMangChuoiCon);
