function solution(N, arr) {
    arr.sort((a, b) => a - b);
    const length = arr.length;
    let answer = 0;

    let lt = 1,
        rt = arr[length - 1];
    while (lt <= rt) {
        const pins = [arr[0]];
        const dist = Math.floor((lt + rt) / 2);

        for (let i = 1; i < length; i++) {
            if (arr[i] - pins[pins.length - 1] >= dist) {
                pins.push(arr[i]);

                if (pins.length === N) {
                    answer = Math.max(dist);
                    break;
                }
            }
        }
        if (pins.length >= N) {
            lt = dist + 1;
        } else {
            rt = dist - 1;
        }
    }

    return answer;
}

// let arr = [1, 2, 8, 4, 9];
let arr = [5, 6, 8, 12, 14];
console.log(solution(3, arr));
