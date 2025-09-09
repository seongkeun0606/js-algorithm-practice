/**
 * 📌 문제 제목: 잘라서 배열로 저장하기
 * 🐶 난이도: level 0
 * 
 * 문자열 my_str과 n이 매개변수로 주어질 때, 
 * my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(my_str, n) {
    const result = [];
    
    for(let i = 0; i < my_str.length; i += n) {
        result.push(my_str.slice(i, i + n));
    }
    
    return result;
}