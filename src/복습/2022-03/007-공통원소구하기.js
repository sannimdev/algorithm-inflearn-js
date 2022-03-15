function solution(a = [], b = []) {
    const answer = [];

    const sortFunc = (a, b) => a - b;
    a.sort(sortFunc);
    b.sort(sortFunc);

    let l = 0;
    let r = 0;

    while (l < a.length && r < b.length) {
        if (a[l] === b[r]) {
            answer.push(a[l]);
            l += 1;
            r += 1;
        } else if (a[l] < b[r]) {
            l += 1;
        } else {
            r += 1;
        }
    }

    return answer;
}
let a = [1, 3, 9, 5, 2];
let b = [4, 3, 2, 5, 7, 8];
console.log(solution(a, b));
