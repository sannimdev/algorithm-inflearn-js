function solution(str) {
    const OPEN = '(';
    const CLOSE = ')';

    let arr = [];
    let opened = [];
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        arr.push(s);
        if (s === OPEN) {
            opened.push(arr.length - 1);
        } else if (s === CLOSE) {
            arr.splice(opened.pop(), i + 1);
        }
    }

    return arr.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
