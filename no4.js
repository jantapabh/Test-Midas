//ช้อ 4

const primeAt = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};

const generatePrime = num => {
    const arr = [];
    let i = 2;
    while (arr.length < num) {
        if (primeAt(i)) {
            arr.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
    };
    return arr;
};
console.log(generatePrime(6));
console.log(generatePrime(16));
console.log(generatePrime(100));