function solution(a = [], b = []) {
    const answer = [];

    let l = 0;
    let r = 0;
    let length = a.length + b.length;

    for (let i = 0; i < length; i++) {
        if (a[l] < b[r]) {
            answer.push(a[l]);
            l += 1;
        } else {
            answer.push(b[r]);
            r += 1;
        }
    }

    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
