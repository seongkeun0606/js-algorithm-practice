/**
 * 📌 문제 제목: 최솟값 구하기
 * 
 * 문제 설명: 
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 * 
 */


// 🧑 내 풀이
function mySolution(input) {
    let min = Number.POSITIVE_INFINITY;

    for(let i = 0; i < input.length; i++) {
      const cur = input[i];

      if(min > cur) {
        min = cur;
      }
    }
    return min;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}


// ✅ 테스트 코드
const input = [5, 3, 7, 11, 2, 15, 17];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));