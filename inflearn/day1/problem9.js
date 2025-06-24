/**
 * 📌 문제 제목: A를 #으로
 * 
 * 문제 설명: 
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
 * 프로그램을 작성하세요.
 */


// 🧑 내 풀이
function mySolution(input) {
  return input.replaceAll('A', '#');
  
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}


// ✅ 테스트 코드
const input = "BANANA";

console.log('🧑 내 답 :', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
