function solution(arr) {
    let answer = 0;
    // 상 우 하 좌
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const N = 7; // 7
    const isValid = (pos) => pos >= 0 && pos < 7;
    dfs([0, 0]);
    function dfs([y, x]) {
        arr[y][x] = 1;
        if (y === N - 1 && x === N - 1) {
            answer += 1;
        } else {
            for (let i = 0; i < dx.length; i++) {
                const [ny, nx] = [y + dy[i], x + dx[i]];
                if (isValid(ny) && isValid(nx) && arr[ny][nx] === 0) {
                    dfs([ny, nx]);
                }
            }
        }
        arr[y][x] = 0;
    }

    return answer;
}
let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
