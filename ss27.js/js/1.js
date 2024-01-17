function timPhanTuLonNhat(mang) {
    if (mang.length === 0) {
        console.log("Mảng rỗng.");
        return;
    }
    let lonNhat = nhoNhat = mang[0];
    for (let i = 1; i < mang.length; i++) {
        if (mang[i] > lonNhat) {
            lonNhat = mang[i];
        } else if (mang[i] < nhoNhat) {
            nhoNhat = mang[i];
        }
    }
    console.log("Phần tử lớn nhất: " + lonNhat);
    console.log("Phần tử nhỏ nhất: " + nhoNhat);
}
let mangSoNguyen = [1, 7, 3, 9, 4, 6, 2, 8];
timPhanTuLonNhat(mangSoNguyen);
