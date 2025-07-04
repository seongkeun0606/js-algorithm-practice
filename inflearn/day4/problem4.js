/**
 * 📌 문제 제목: 회문 문자열
 * 
 * 문제 설명:
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 
 * 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 */

// 🧑 내 풀이
function mySolution(input) {
  let reverse = "";
  for(let i = 1; i <= input.length; i++) {
    reverse += input[input.length - i];
  }

  return input.toUpperCase() === reverse.toUpperCase() ? "YES" : "NO"
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return 'NO';
  }
  return answer;
}



// ✅ 테스트 코드
const input = "gooG";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
