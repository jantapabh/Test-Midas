//ช้อ 4 จำนวนเฉพาะ
const { performance } = require('perf_hooks');
var t0 = performance.now()
console.log('Start Time : ', t0);

const primeAt = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};


const calculatePrime = num => {
    const arr = [];
    let i = 2;
    while (arr.length < num) {
        if (primeAt(i)) {
            arr.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
    };
    console.log('primeAt (%d) : %d', num, arr[arr.length - 1]);
    return arr[arr.length - 1];
};

//Call Function
calculatePrime(1)
calculatePrime(2)
calculatePrime(6)
calculatePrime(100)

var t1 = performance.now()
console.log('End Time : ', t1);
console.log("Call to calculatePrime :  " + (t1 - t0) + " milliseconds.")

