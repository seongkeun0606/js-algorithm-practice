/**
 * 📌 문제 제목: 자릿수의 합
 * 문제 설명:
 * 자릿수의 합개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요 
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다
 * 만약 235와 1234가 동시에 답이될 수 있다면 1234를 답으로 출력해야 함
 */

// 🧑 내 풀이
const getSumOfNumber = (num) => {
  let sum = 0;
  const numToStr = num.toString();

  for(let i = 0; i < numToStr.length; i++) {
    sum += Number(numToStr[i])
  }

  return sum;
}

function mySolution(arr) {
  const map = new Map();
  
  for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], getSumOfNumber(arr[i]));
  }
  
  let maxKey = Number.MIN_SAFE_INTEGER, maxValue = Number.MIN_SAFE_INTEGER;

  for(let [key, value] of map) {
    if(value > maxValue || (value === maxValue && key > maxKey)) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}

// 👨‍🏫 선생님 풀이
function teacherSolution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}


// ✅ 테스트 코드
const arr = [128, 460, 603, 40, 521, 137, 123];

console.log('🧑 내 답:', mySolution(arr));
console.log('👨‍🏫 선생님 답:', teacherSolution(arr));
