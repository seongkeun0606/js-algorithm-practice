/**
 * 📌 문제 제목: 문자열의 앞의 n글자
 * 🐶 난이도: level 0
 * 
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
 * my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(my_string, n) {
    return my_string.substring(0, n);
}