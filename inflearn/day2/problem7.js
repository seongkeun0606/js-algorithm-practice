/**
 * 📌 문제 제목: 중복문자제거
 * 
 * 문제 설명: 
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 */

// 🧑 내 풀이
function mySolution(input) {
    let newStr = "";

    for(let i = 0; i < input.length; i++) {
      const cur = input[i];

      if(!newStr.includes(cur)) {
        newStr += cur;
      }
    }
    return newStr;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}


// ✅ 테스트 코드
const input = "ksekkset";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
