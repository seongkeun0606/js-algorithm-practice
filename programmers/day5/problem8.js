/**
 * 📌 문제 제목: 중복된 숫자 개수
 * 🐶 난이도: level 0
 * 
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 * 
 */

function solution(array, n) {
    return array.filter((num) => num === n).length;
}