/**
 * 📌 문제 제목: 접두사인지 확인하기
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 문자열 my_string과 is_prefix가 주어질 때, 
 * is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(my_string, is_prefix) {
    return my_string.startsWith(is_prefix) ? 1 : 0;
}