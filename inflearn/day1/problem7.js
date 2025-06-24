/**
 * 📌 문제 제목: 10부제
 * 
 * 문제 설명: 
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 
 * 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 
 * 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다.
 * 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다. 
 * 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 
 * 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요. 
 * 
 */


// 🧑 내 풀이
function mySolution(num, input) {
  let count = 0;

  for(let i = 0; i < input.length; i++) {
    const cur = input[i].toString();
    if(cur.includes(num)) {
        count++
    }
  }

  return count;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

// ✅ 테스트 코드
const num1 = 3;
const input1 = [25, 23, 11, 47, 53, 17, 33];
const num2 = 0;
const input2 = [12, 20, 54, 30, 87, 91, 30];

console.log('🧑 내 답 1:', mySolution(num1, input1));
console.log('🧑 내 답 2:', mySolution(num2, input2));
console.log('👨‍🏫 선생님 답1:', teacherSolution(num1, input1));
console.log('👨‍🏫 선생님 답2:', teacherSolution(num2, input2));
