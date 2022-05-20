function solution(board = [[]], moves = []) {
    const N = board[0].length;

    let answer = 0;
    const basket = [];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < N; j++) {
            const current = board[j][moves[i] - 1];
            if (current !== 0) {
                if (basket[basket.length - 1] === current) {
                    answer += 2;
                    basket.pop();
                } else {
                    basket.push(current);
                }

                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }

    return answer;
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
