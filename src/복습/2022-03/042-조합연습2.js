function solution(arr, N) {
    const answer = [];

    dfs(0);
    function dfs(L, s = 0, tmp = []) {
        if (L === N) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i < arr.length; i++) {
                tmp.push(arr[i]);
                dfs(L + 1, i + 1, tmp);
                tmp.pop();
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 3], 2));
