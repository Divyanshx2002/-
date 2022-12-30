let numHistory = 0;
let decrease = document.querySelector('#dec1');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#inc1');
let head = document.querySelector('#h1');


function increamentNum(num) {
    numHistory = ++num;
    return num;
}

function decrementNum(num) {
    numHistory = --num;
    return num;
}


increase.addEventListener('click', function () {
    setInterval(() => {
        let incrementNum = increamentNum(numHistory);
        head.innerHTML = incrementNum;
    }, 1000);
})

decrease.addEventListener('click', function () {
    setInterval(() => {
        let decrementNum = decrementNum(numHistory);
        head.innerHTML = decrementNum;
    }, 1000);
});


