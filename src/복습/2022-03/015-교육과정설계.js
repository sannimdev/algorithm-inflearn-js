function solution(a = '', b = '') {
    const must = a.split('');
    for (const current of b) {
        if (!b.includes(must)) return 'NO';

        if (must[0] === current) {
            must.shift();
        }

        if (!must.length) return 'YES';
    }

    return 'NO';
}

let a = 'CBA';
let b = 'CBDAGE';
// let b = 'CGEADB';
console.log(solution(a, b));
