function solution(N, arr) {
    let answer = -1;

    arr.sort();

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const p = parseInt(l + r / 2);
        console.log(p, N, l, r);
        if (arr[p] === N) {
            return p + 1;
        } else if (arr[p] < N) {
            l = p;
        } else {
            r = p;
        }
    }

    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
