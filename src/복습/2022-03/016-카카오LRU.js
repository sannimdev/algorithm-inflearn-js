function solution(length, arr) {
    const queue = Array.from({ length }, () => 0);

    for (const n of arr) {
        const idx = queue.findIndex((i) => i === n);
        if (idx >= 0) {
            // hit
            queue.unshift(...queue.splice(idx, 1));
        } else {
            // miss
            queue.unshift(n);
            queue.pop();
        }
    }

    return queue;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
