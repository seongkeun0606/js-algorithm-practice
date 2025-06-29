/**
 * 📌 문제 제목: 회문 문자열
 * 
 * 문제 설명:
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES"
 * 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
 * 알파벳 이외의 문자들의 무시합니다.
 */

// 🧑 내 풀이
function mySolution(input) {
  const upper = input.toUpperCase();
  const onlyAlpha = [];

  for (let char of upper) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      onlyAlpha.push(char);
    }
  }

  const len = onlyAlpha.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (onlyAlpha[i] !== onlyAlpha[len - 1 - i]) {
      return "NO";
    }
  }

  return "YES";
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}



// ✅ 테스트 코드
const input = "gooG";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
