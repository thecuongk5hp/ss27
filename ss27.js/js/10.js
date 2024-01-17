function mangConDoDaiLonNhat(arr) {
    let maxDistinctLength = 0; 
    let currentDistinctLength = 0; 
    let currentDistinctElements = new Set(); 
    let maxDistinctElements = [];  
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (!currentDistinctElements.has(currentElement)) {
            currentDistinctElements.add(currentElement);
            currentDistinctLength++;
            if (currentDistinctLength > maxDistinctLength) {
                maxDistinctLength = currentDistinctLength;
                maxDistinctElements = Array.from(currentDistinctElements);
            }
        } else {
            currentDistinctElements.clear();
            currentDistinctElements.add(currentElement);
            currentDistinctLength = 1;
        }
    }
    return maxDistinctElements;
}
let mang = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
let ketQua = mangConDoDaiLonNhat(mang);
console.log("Mảng con chứa các phần tử phân biệt có độ dài lớn nhất:", ketQua);
