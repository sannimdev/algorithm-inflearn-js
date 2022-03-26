function solution(arr, n) {
    const answer = [];
    const length = arr.length;

    dfs(0, 0);
    function dfs(k, s, tmp = []) {
        if (k === n) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i < length; i++) {
                tmp.push(arr[i]);
                dfs(k + 1, i + 1, tmp);
                tmp.pop();
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
