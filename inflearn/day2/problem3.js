/**
 * 📌 문제 제목: 대문자로 통일
 * 
 * 문제 설명: 
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 
 * 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요
 */

// 🧑 내 풀이
function mySolution(input) {
    return input.toUpperCase();
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }

  return answer;
}

// ✅ 테스트 코드
const input = "ItisTimeToStudy";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
