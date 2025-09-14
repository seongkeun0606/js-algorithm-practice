/**
 * 📌 문제 제목: 배열 만들기 2
 * 🐶 난이도: level 0
 * 
 * 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 * 
 */

function solution(l, r) {
    const answer = [];
    let start = l;
    while (start % 5 !== 0) start++;
    
    for(let i = start; i <= r; i += 5) {
        const filtered = [...i.toString()].every((num) => num === "0" || num === "5");
        if(filtered) {
            answer.push(i);
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}