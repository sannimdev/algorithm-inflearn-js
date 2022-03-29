function solution(boards) {
    let answer = 0;

    const length = 7; // 7 * 7 격자판 한정
    // 상 하 좌 우
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const isValid = (position) => position >= 0 && position < length;
    boards[0][0] = 1; // <- 표시
    dfs([0, 0]);
    function dfs([y, x]) {
        if (y === length - 1 && x === length - 1) {
            answer += 1;
        } else {
            for (let i = 0; i < dx.length; i++) {
                const [ny, nx] = [y + dy[i], x + dx[i]];
                if (isValid(ny) && isValid(nx) && boards[ny][nx] === 0) {
                    boards[ny][nx] = 2;
                    dfs([ny, nx]);
                    boards[ny][nx] = 0;
                }
            }
        }
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
