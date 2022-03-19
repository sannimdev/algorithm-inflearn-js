function solution(maze) {
    let answer = 0;

    const size = 7; // 7x7 격자판이 주어진다고 가정
    // 상, 하, 좌, 우
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    const path = [];
    function DFS(x, y) {
        if (x === size - 1 && y === size - 1) {
            console.log(path);
            answer += 1;
        } else {
            for (let i = 0; i < dy.length; i++) {
                const next = [y + dy[i], x + dx[i]];
                const [ny, nx] = next;
                if (ny >= 0 && ny < size && nx >= 0 && ny < size && maze[y][x] === 0) {
                    path.push([y, x]);
                    maze[y][x] = 2;
                    DFS(nx, ny);
                    maze[y][x] = 0;
                    path.pop();
                }
            }
        }
    }

    DFS(0, 0);
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
