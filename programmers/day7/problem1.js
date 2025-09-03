/**
 * 📌 문제 제목: 나누어 떨어지는 숫자 배열
 * 🐶 난이도: level 1
 * 
 * 문제 설명:
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * 
 */

function solution(arr, divisor) {
    const sortedArr = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b)
    
    return sortedArr.length > 0 ? sortedArr : [-1];
} 