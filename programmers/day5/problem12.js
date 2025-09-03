/**
 * 📌 문제 제목: 없는 숫자 더하기
 * 🐶 난이도: level 0
 * 
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(numbers) {
    const numZeroToNine = [0,1,2,3,4,5,6,7,8,9];
    const filteredNums = numZeroToNine.filter((num) => !numbers.includes(num))
    
    return filteredNums.reduce((acc, cur) => acc + cur, 0);
}