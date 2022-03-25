function solution(m, arr) {
    const n = arr.length;
    let answer = [];

    const tmp = Array.from({ length: m }, () => 0);
    const ch = Array.from({ length: n }, () => 0);

    function dfs(L) {
        if (L === m) {
            console.log(L, m);
            answer.push(tmp.slice());
            return;
        } else {
            console.log(L);
            for (let i = 0; i < n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    dfs(L + 1);
                    ch[i] = 0;
                }
            }
        }
    }

    dfs(0);
    return answer;
}

let arr = [3, 6, 9, 5];
console.log(solution(2, arr));
