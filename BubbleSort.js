var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50));
}
console.log(arr);
let i = 0,
    j = 0;
var myinterval = setInterval(
    () => {
        if (j == arr.length - 1 - i) {
            i = i + 1;
            j = 0;
        }

        if (i < arr.length) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            if (i != j) {
                ctx.clearRect(0, 0, 400, 400);
                for (let itr = 0; itr < arr.length; itr++) {
                    if (itr == i) {
                        ctx.fillStyle = 'red';
                    } else
                    if (itr == j) {
                        ctx.fillStyle = 'yellow';
                    } else {
                        ctx.fillStyle = 'blue';
                    }
                    ctx.fillRect(itr * 4 + 4, 0, 4, arr[itr] * 8);
                }
            }
        } else {
            ctx.fillStyle = 'blue';
            for (let itr = 0; itr < arr.length; itr++) {
                ctx.fillRect(itr * 4 + 4, 0, 4, arr[itr] * 8);
            }
            clearInterval(myinterval);
        }
        j++;
    }, 1
);
