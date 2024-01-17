function taoMangKhoangAB(a, b) {
    let startValue = Math.min(a, b);
    let endValue = Math.max(a, b);
    let mangKhoangAB = [];
    for (let i = startValue; i <= endValue; i++) {
        mangKhoangAB.push(i);
    }
    return mangKhoangAB;
}
let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
let mangKhoangAB = taoMangKhoangAB(a, b);
console.log("Mảng chứa các số trong khoảng giữa " + a + " và " + b + ":");
console.log(mangKhoangAB);
