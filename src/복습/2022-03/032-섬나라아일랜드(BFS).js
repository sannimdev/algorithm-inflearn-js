function solution(arr) {
    let answer = 0;
    const N = arr.length;
    // 12시부터 시계방향으로
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // [y, x] 순
            if (arr[i][j] === 1) {
                const q = [[i, j]];
                while (q.length) {
                    const [y, x] = q.shift();
                    for (let k = 0; k <= dy.length; k++) {
                        const [ny, nx] = [y + dy[k], x + dx[k]];
                        if (ny >= 0 && ny < N && nx >= 0 && nx < N && arr[ny][nx] === 1) {
                            arr[ny][nx] = 0;
                            q.push([ny, nx]);
                        }
                    }
                }
                answer += 1;
            }
        }
    }

    return answer;
}
let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
