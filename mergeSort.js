var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50));
}
/*
function merge(l, mid, r) {
    
    i = 0;

}*/
let mergeSort = [
    [0, arr.length - 1]
];
let merge = [];
while (mergeSort.length != 0) {
    console.log(mergeSort);
    let mytop = mergeSort.pop();
    if (mytop[0] != mytop[1]) {


        let mid = Math.floor((mytop[0] + mytop[1]) / 2);
        mergeSort.push([mytop[0], mid]);
        mergeSort.push([mid + 1, mytop[1]]);
        merge.push([mytop[0], mid, mytop[1]]);
    }
}
var myInterval = setInterval(() => {


    if (merge.length == 0) {
        ctx.fillStyle = 'blue';
        for (let itr = 0; itr < arr.length; itr++) {

            ctx.fillRect(itr * 4 + 4, 0, 4, arr[itr] * 8);
        }
        clearInterval(myInterval);
    } else {
        mytop = merge.pop();
        let l = mytop[0],
            mid = mytop[1],
            r = mytop[2];
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
    }


    ctx.clearRect(0, 0, 400, 400);

    for (let itr = 0; itr < arr.length; itr++) {
        ctx.fillStyle = 'blue';
        if (itr >= mytop[0] & itr <= mytop[2])
            ctx.fillStyle = 'yellow';

        ctx.fillRect(itr * 4 + 4, 0, 4, arr[itr] * 8);
    }



}, 10);

console.log(arr);