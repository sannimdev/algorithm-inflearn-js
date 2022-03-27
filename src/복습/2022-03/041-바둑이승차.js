function solution(W, dogs) {
    let answer = [];

    const n = dogs.length;

    const tmp = [];
    dfs(0);
    function dfs(L) {
        const sum = tmp.reduce((result, current) => result + current, 0);
        if (L === n) {
            if (sum <= W) answer.push(sum);
        } else {
            tmp.push(dogs[L]);
            dfs(L + 1);
            tmp.pop();
            dfs(L + 1);
        }
    }

    return Math.max(...answer);
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
