function solution(my_string, n) {
    var answer = '';
    const arr = Array.from({length: n}, () => 0);
    
    [...my_string].forEach((str) => {
        arr.forEach(() => {
            answer += str
        })
    })
    return answer;
    
    // return [...my_string].reduce((acc, cur) => acc + cur.repeat(n), '')
}