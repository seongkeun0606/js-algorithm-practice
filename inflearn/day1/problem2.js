/**
 * 📌 문제 제목: 삼각형 판별하기
 * 
 * 문제 설명:
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 
 * 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 
 * 만들 수 없으면 ”NO"를 출력한다.
 * 
 */


// 🧑 내 풀이
function mySolution(input) {
    input.sort((a, b) => b - a);
    const max = input[0];
    
    if(max > input[1] + input[2]) {
        return "NO"
    } else {
        return "YES"
    }
    
}

// 👨‍🏫 선생님 풀이
function teacherSolution(a, b, c) {
  let answer = 'YES',
  max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = 'NO';
  return answer;
}

// ✅ 테스트 코드
const input = [6, 7, 11];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(6, 7, 11));

