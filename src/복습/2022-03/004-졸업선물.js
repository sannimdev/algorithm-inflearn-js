// 완전탐색이라고 무조건 3중은 아니다...
// 완전탐색은 알고리즘보다는 생각하는 것이 더 중요하겠다.
function solution(budget, items) {
    let answer = 0;
    items.sort(([p1, s1], [p2, s2]) => p1 + s1 - (p2 + s2));
    const length = items.length;
    let max = 0;

    for (let i = 0; i < length; i++) {
        let cnt = 1;
        let sum = items[i][0] / 2 + items[i][1];
        for (let j = 0; j < length; j++) {
            if (i === j) continue;
            const [product, shipping] = items[j];
            const price = product + shipping;
            if (sum + price <= budget) {
                sum += price;
                cnt += 1;
            } else {
                break;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(solution(28, arr));
