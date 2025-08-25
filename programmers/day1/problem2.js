/**
 * 📌 문제 제목: 자릿수 더하기
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 * 
 */

function solution(n) {
    const arr = [...n.toString()];
    const sum = arr.reduce((acc, cur) => {
        return acc += Number(cur);
    }, 0);
    
    return sum;
}