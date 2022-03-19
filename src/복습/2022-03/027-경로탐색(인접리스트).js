function solution(dest, arr) {
    let answer = [];

    const map = {};
    for (const [from, to] of arr) {
        map[from] = Array.isArray(map[from]) ? [...map[from], to] : [to];
    }

    const path = [];
    DFS(1);
    function DFS(L) {
        const next = map[L];
        if (path.includes(L)) return;
        if (L === dest) {
            console.log(path);
            answer.push([...path, dest]);
        } else {
            for (let i = 0; i < next.length; i++) {
                path.push(L);
                DFS(next[i]);
                path.pop();
            }
        }
    }

    return answer.length;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.time();
console.log(solution(5, arr));
console.timeEnd();
