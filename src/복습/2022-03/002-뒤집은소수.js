function solution(arg = []) {
    // const answer = [];
    // for (const n of arg) {
    //     const reversedNumber = reverseNumber(n);
    //     const isDec = isDecimal(reversedNumber);
    //     if (isDec) {
    //         answer.push(reversedNumber);
    //     }
    // }
    // return answer;
    return arg.map((n) => reverseNumber(n)).filter((n) => isDecimal(n));
}

function reverseNumber(n) {
    const s = n + '';
    return parseInt(s.split('').reverse().join(''));
}

function isDecimal(n) {
    if (n === 1) return true;
    for (let i = 3; i < n; i++) {
        // console.log(`${n} % ${i}`, n % i);
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(solution([32]));
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
