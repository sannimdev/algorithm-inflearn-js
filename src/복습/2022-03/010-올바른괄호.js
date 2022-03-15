function solution(s = '') {
    let answer = 0;

    const stack = [];
    const OPEN = '(';
    const CLOSE = ')';
    if ((s[0] = ')')) return 'NO';
    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === OPEN && s[i] === CLOSE) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    console.log(stack);
    return !stack.length ? 'YES' : 'NO';
}

let a = '(()(()))(()';
let b = ')(((())))';
console.log(solution(b));
