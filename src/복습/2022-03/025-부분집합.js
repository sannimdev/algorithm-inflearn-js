function solution(arr) {
    let answer = [];

    const result = [];
    DFS(0);
    function DFS(L) {
        if (L >= arr.length) {
            answer.push(result.slice());
        } else {
            result.push(arr[L]);
            DFS(L + 1);
            result.pop();
            DFS(L + 1);
        }
    }

    return answer;
}

console.log(solution([1, 2, 3]));
