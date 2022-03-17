function solution(arr) {
    return arr.sort(([x1, y1], [x2, y2]) => {
        return x1 === x2 ? y1 - y2 : x1 - x2;
    });
}

let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
];
console.log(solution(arr));
