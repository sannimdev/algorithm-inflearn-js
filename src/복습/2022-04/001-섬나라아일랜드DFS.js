function solution(arr) {
    let answer = 0;
    const N = arr.length;
    const isValid = (pos) => pos >= 0 && pos < N;
    // '상' 부터 시계방향으로
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1, 0];

    const SEA = 0;
    const ISLAND = 1;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === ISLAND) {
                dfs([i, j]);
                answer += 1;
            }
        }
    }

    function dfs([y, x]) {
        arr[y][x] = SEA;
        for (let i = 0; i < dy.length; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (isValid(ny) && isValid(nx) && arr[ny][nx] === ISLAND) {
                dfs([ny, nx]);
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
