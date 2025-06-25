/**
 * 📌 문제 제목: 중복단어제거
 * 
 * 문제 설명: 
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 */

// 🧑 내 풀이
function mySolution(input) {
    const result = [];

    for(let word of input) {
      if(result.indexOf(word) === -1) {
        result.push(word);
      }
    }

    return result;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(s) {
  let answer;
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}


// ✅ 테스트 코드
const input = ["good", "time", "good", "time", "student"]

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
