function solution(n, k, arr) {
    const cases = new Set();
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                cases.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }
    const answer = Array.from(cases).sort((a, b) => b - a);

    return answer[k - 1];
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
