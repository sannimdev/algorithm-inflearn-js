function solution(S, E) {
    const q = [S];

    const MAX = 10000;
    const checked = Array.from({ length: MAX + 1 }, () => 0);
    while (q.length) {
        const current = q.shift();
        for (const next of [current + 1, current - 1, current + 5]) {
            if (checked[next] === 0) checked[next] = checked[current] + 1;
            if (next === E) {
                return checked[next];
            } else if (next > 0 && next < MAX) {
                q.push(next);
            }
        }
    }

    return -1;
}

// console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5
