/**
 * 📌 문제 제목: 배열 만들기 1
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(n, k) {
    const result = [];
    let cur = k;
    
    while (n >= cur) {
        if(cur % k === 0) {
            result.push(cur)   
        }
        cur++
    }

    return result;
}

/**
 * 다른 풀이
 */
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}