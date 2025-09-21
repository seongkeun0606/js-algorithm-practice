/**
 * 📌 문제 제목: 카운트 업
 * 🐶 난이도: level 0
 * 
 * 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(start_num, end_num) {
    var answer = [];
    
    while(start_num <= end_num) {
        answer.push(start_num);
        start_num++
    }
    return answer;
}