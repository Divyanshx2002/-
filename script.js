let numHistory = 0;
let decrease = document.querySelector('#dec1');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#inc1');
let head = document.querySelector('#h1');
let incrementIntervalID;
let decrementIntervalID;
let resetIntervalID;

increase.addEventListener('click', function () {
    if (decrementIntervalID) {
        clearInterval(decrementIntervalID)
    }
    if (!incrementIntervalID) {
        incrementIntervalID = setInterval(() => {
            let increaseNum = increamentNum(numHistory);
            head.innerHTML = increaseNum;
        }, 1000);
    }
})

decrease.addEventListener('click', function () {
    if (incrementIntervalID) {
        clearInterval(incrementIntervalID)
    }
    if (!decrementIntervalID) {
        decrementIntervalID = setInterval(() => {
            let decreaseNum = decrementNum(numHistory);
            head.innerHTML = decreaseNum;
        }, 1000);
    }
});

reset.addEventListener('click', function(){
    if (decrementIntervalID) {
        clearInterval(decrementIntervalID)
    }
    if (incrementIntervalID) {
        clearInterval(incrementIntervalID)
    }
    if (!resetIntervalID){
        let reset = resetNum(numHistory);
        head.innerHTML = 0;
    }
});

function increamentNum(num) {
    num++;
    numHistory = num;
    return numHistory;
}

function decrementNum(num) {
    num--;
    numHistory = num;
    return numHistory;
}

function resetNum(num) {
    num = 0;
    numHistory = num;
    return numHistory;
}
