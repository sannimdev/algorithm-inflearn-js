function solution(C, arr) {
    let answer = [];

    let result = [];
    const getSum = (arr = []) => arr.reduce((result, current) => result + current, 0);
    DFS(0);
    function DFS(L) {
        if (L >= arr.length) {
            const sum = getSum(result);
            if (sum <= C) {
                answer.push(sum);
            }
        } else {
            result.push(arr[L]);
            DFS(L + 1);
            result = result.filter((n) => n !== arr[L]);
            DFS(L + 1);
        }
    }

    return Math.max(...answer);
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
