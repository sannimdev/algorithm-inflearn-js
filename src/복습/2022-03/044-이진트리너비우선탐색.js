function solution() {
    const queue = [1];

    let depth = 0;
    while (queue.length) {
        const cur = queue.shift();
        depth += 1;
        console.log(cur);

        if (depth <= 3) {
            const nexts = [cur * 2, cur * 2 + 1];
            for (const next of nexts) {
                queue.push(next);
            }
        }
    }
}
console.log(solution());
