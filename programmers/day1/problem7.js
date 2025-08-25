/**
 * 📌 문제 제목: 숫자비교하기
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;
}

/**
 * 다른 풀이
 */
function solution(s1, s2) {
    let count = 0;

    for(let i = 0; i < s1.length; i++) {
        const cur = s1[i];
        if(s2.includes(cur)) {
            count++
        }
    }
    return count;
}