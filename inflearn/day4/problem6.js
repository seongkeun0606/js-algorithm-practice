/**
 * 📌 문제 제목: 숫자만 추출
 * 
 * 문제 설명:
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
 * 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.
 * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 */

// 🧑 내 풀이
function mySolution(input) {
  let str = "";

  for(let i = 0; i < input.length; i++) {
    const cur = input[i];
    const regex = /\d/;
    
    if(regex.test(cur)) {
      str += cur;
    }
  }
  
  return Number(str);
}

// 👨‍🏫 선생님 풀이
function teacherSolution(str){
  let answer="";
  for(let x of str){
    if(!isNaN(x)) answer+=x;
  }  
  return parseInt(answer);
}


// ✅ 테스트 코드
const input = "g0en2T0s8eSoft";

console.log('🧑 내 답:', mySolution(input));
console.log('👨‍🏫 선생님 답:', teacherSolution(input));
