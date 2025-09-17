/**
 * 📌 문제 제목: 문자열 계산하기
 * 🐶 난이도: level 0
 * 
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
 * 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 * 
 */

function solution(my_string) {
  const tokens = my_string.split(' '); 
  let result = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const num = Number(tokens[i + 1]);

    if (operator === '+') {
      result += num;
    } else if (operator === '-') {
      result -= num;
    }
  }

  return result;
}
