/**
 * 📌 문제 제목: 보이는 학생
 * 
 * 문제 설명:
 * 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 
 * 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. 
 * (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
 * 
 */

// 🧑 내 풀이
function mySolution(input) {
  let count = 1;
  let max = Number.MIN_SAFE_INTEGER

  for(let i = 1; i < input.length; i++) {
    const cur = input[i];
    if(cur > max) {
      max = cur;
      count++ 
    }
  }
  return count;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

// ✅ 테스트 코드
const input = [130, 135, 148, 140, 145, 150, 150, 153];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
