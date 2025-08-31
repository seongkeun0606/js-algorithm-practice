/**
 * 📌 문제 제목: 평균 구하기
 * 🐶 난이도: level 1
 * 
 * 문제 설명:
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 
 */

function solution(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    
    return sum / arr.length;
}