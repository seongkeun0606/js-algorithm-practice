/**
 * 📌 문제 제목: 홀수
 * 
 * 문제 설명: 
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 
 * 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
 * 이들 중 홀수는 77, 41, 53, 85이므로 그 합은 77 + 41 + 53 + 85 = 256 이 되고, 
 * 41 < 53 < 77 < 85이므로 홀수들 중 최소값은 41이 된다.
 * 
 */


// 🧑 내 풀이
function mySolution(input) {
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  
  for(let i = 0; i < input.length; i++) {
    const cur = input[i];
    if(cur % 2 === 1) {
      sum += cur;
      if(min > cur) {
        min = cur;
      }
    }
  }
  
  return [sum, min];
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

// ✅ 테스트 코드
const input = [12, 77, 38, 41, 53, 92, 85];

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
