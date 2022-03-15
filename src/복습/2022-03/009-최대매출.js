function solution(k, arr = []) {
    let l = 0;
    let r = k - 1;

    let sum = arr.slice(l, r + 1).reduce((result, current) => result + current, 0);
    let max = sum;
    while (r < arr.length - 1) {
        sum -= arr[l];
        l += 1;
        r += 1;
        sum += arr[r];
        max = Math.max(max, sum);
    }

    return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
