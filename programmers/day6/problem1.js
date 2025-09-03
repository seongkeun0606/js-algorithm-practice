/**
 * 📌 문제 제목: 짝수는 싫어요
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(n) {
    const answer = [];
    
    for(let i = n; i >= 1; i--) {
        if(i % 2 === 1) {
            answer.push(i);
        }
    }
    return answer.sort((a, b) => a - b);
}