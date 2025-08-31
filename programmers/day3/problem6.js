/**
 * 📌 문제 제목: 원소들의 곱과 합
 * 🐶 난이도: level 0
 * 
 * 문제 설명:
 * 정수가 담긴 리스트 num_list가 주어질 때, 
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 * 
 */

function solution(num_list) {
    const square = Math.pow(num_list.reduce((acc, cur) => acc + cur, 0), 2);
    const multiple = num_list.reduce((acc, cur) => acc * cur, 1)
    
    return square > multiple ? 1 : 0;
}