/**
 * 📌 문제 제목: 문자열 정렬하기 (1)
 * 🐶 난이도: level 0
 * 
 * 문자열 my_string이 매개변수로 주어질 때, 
 * my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 * 
 */

function solution(my_string) {
    const arr = [...my_string].map(Number)
    return arr.filter((num) => !isNaN(num)).sort((a, b) => a - b)
}