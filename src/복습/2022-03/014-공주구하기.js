function solution(N, k) {
    const princes = Array.from({ length: N }, (_, idx) => idx + 1);

    let cnt = 0;
    let p = 0;
    const isExcluded = (cnt, k) => cnt % k === k - 1;
    while (princes.length > 1) {
        if (isExcluded(cnt, k)) {
            // 제외될 왕자
            princes.splice(p, 1);
            cnt = 0;
        } else {
            cnt = (cnt + 1) % k;
            p = (p + 1) % princes.length;
        }
    }

    return princes.pop();
}

console.log(solution(8, 3));
