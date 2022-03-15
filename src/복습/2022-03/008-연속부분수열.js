function solution(n, arr = []) {
    let answer = 0;

    let l = 0;
    let r = 1;
    const length = arr.length;

    let sum = arr[l];
    while (l < r && r < arr.length) {
        sum += arr[r];
        if (sum === n) {
            answer += 1;
            r += 1;
        } else if (sum < n) {
            r += 1;
        } else {
            sum -= arr[l] + arr[r];
            l += 1;
        }
    }

    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
