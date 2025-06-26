/**
 * 📌 문제 제목: 큰 수 출력하기
 * 
 * 문제 설명:
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
 * (첫 번째 수는 무조건 출력한다)
 * 
 */

// 🧑 내 풀이
function mySolution(input) {
    const result = [input[0]];

    for(let i = 1; i <= input.length; i++) {
        const cur = input[i];
        const prev = input[i - 1];

        if(prev < cur) {
            result.push(cur);
        }
    }

    return result;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// ✅ 테스트 코드
const input = [7, 3, 9, 5, 6, 12];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
