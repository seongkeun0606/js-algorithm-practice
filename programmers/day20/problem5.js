/**
 * 📌 문제 제목: 배열 회전시키기
 * 🐶 난이도: level 0
 * 
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(numbers, direction) {
    if(direction === "right") {
        const last = numbers.pop()
        numbers.unshift(last)
    } else {
        const first = numbers.shift();
        numbers.push(first);
    }
    
    return numbers;
}