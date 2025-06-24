/**
 * 📌 문제 제목: 연필 개수
 * 
 * 문제 설명: 
 * 연필 1 다스는 12자루입니다. 
 * 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
 * 
 */


// 🧑 내 풀이
function mySolution(input) {
    return Math.ceil(input / 12);
}

// 👨‍🏫 선생님 풀이
function teacherSolution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

// ✅ 테스트 코드
const input = 25;

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));