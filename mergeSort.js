var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50));
}

function merge(l, mid, r) {
    let newArray = [];
    let i = l,
        j = mid + 1;
    while (i <= mid && j <= r) {
        if (arr[i] > arr[j]) {
            newArray.push(arr[j]);
            j++;
        } else {
            newArray.push(arr[i]);
            i++;
        }
    }
    while (i <= mid) {
        newArray.push(arr[i]);
        i++;
    }
    while (j <= r) {
        newArray.push(arr[j]);
        j++;
    }
    for (i = l; i <= r; i++)
        arr[i] = newArray[i - l];
    setTimeout(() => {
        ctx.clearRect(0, 0, 400, 400);
        ctx.fillStyle = 'blue';
        for (let itr = 0; itr < arr.length; itr++) {
            ctx.fillRect(itr * 4 + 4, 0, 4, arr[itr] * 8);
        }
    }, 1);
}

function mergeSort(l, r) {
    if (l == r)
        return;

    let mid = Math.floor((l + r) / 2);



    mergeSort(l, mid);
    mergeSort(mid + 1, r);
    merge(l, mid, r);

}
mergeSort(0, arr.length - 1);
console.log(arr);