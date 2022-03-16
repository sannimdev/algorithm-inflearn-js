function solution(s = '') {
    let answer = 0;

    const OPEN = '(';
    const CLOSE = ')';
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const x = s[i];
        const isLaser = i > 0 && s[i - 1] === OPEN && x === CLOSE;
        if (isLaser) {
            stack.pop();
            answer += stack.length;
        } else {
            // 레이저가 아닌 경우
            if (x === OPEN) {
                stack.push(x);
            } else if (x === CLOSE) {
                stack.pop();
                answer += 1;
            }
        }
    }

    return answer;
}

let a = '()(((()())(())()))(())';
// let a = '(((()(()()))(())()))(()())';
console.log(solution(a));
