function solution(boards) {
    let answer = 0;
    const N = boards.length;
    // '상' 부터 시계방향으로
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1, 0];

    // [y, x]
    const ISLAND = 1;
    const SEA = 0;
    const isValid = (pos) => pos >= 0 && pos < N;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const queue = [[i, j]];
            let isFound = false;
            while (queue.length) {
                const [y, x] = queue.shift();
                // console.log([y, x], boards[y][x], boards[y][x] === ISLAND);
                if (boards[y][x] === ISLAND) {
                    isFound = true;
                    boards[y][x] = SEA;
                    for (let k = 0; k < dy.length; k++) {
                        const [ny, nx] = [y + dy[k], x + dx[k]];
                        if (isValid(ny) && isValid(nx) && boards[ny][nx] === ISLAND) {
                            queue.push([ny, nx]);
                            // console.log('\t', [ny, nx], boards[ny][nx]);
                        }
                    }
                }
            }

            if (isFound) {
                answer += 1;
                // console.log('=========================>', answer);
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
