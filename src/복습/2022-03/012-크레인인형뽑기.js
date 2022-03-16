function solution(board = [], moves = []) {
    const stack = [];
    let cnt = 0;
    for (let i = 0; i < moves.length; i++) {
        const x = moves[i] - 1;
        for (let j = 0; j < board[0].length; j++) {
            const y = board[j][x];
            if (y > 0) {
                if (stack[stack.length - 1] === y) {
                    stack.pop();
                    cnt += 2; // 사라질 때 2개씩 사라지니까...
                } else {
                    stack.push(y);
                }
                board[j][x] = 0;
                break;
            }
        }
    }

    return cnt;
}
let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
