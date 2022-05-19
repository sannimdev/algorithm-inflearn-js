const a = [10, 20, 30, 40, 50];

function solution(N, numbers) {
    const answer = [];
    const chk = Array.from({ length: N }, () => 0);
    const tmp = Array.from({ length: N }, () => 0);

    dfs();
    function dfs(L = 0) {
        if (L === N) {
            answer.push(tmp.slice());
        } else {
            for (let i = 0; i < numbers.length; i++) {
                if (!chk[i]) {
                    chk[i] = 1;
                    tmp[L] = numbers[i];
                    dfs(L + 1, i + 1);
                    chk[i] = 0;
                }
            }
        }
    }

    return answer;
}

let arr = [3, 6, 9, 5];
console.log(solution(2, arr));
