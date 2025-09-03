/**
 * 📌 문제 제목: 배열 만들기 5
 * 🐶 난이도: level 0
 * 
 * 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
 * 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 
 * 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(intStrs, k, s, l) {
    const arr = intStrs.map((num) => num.slice(s, s + l));
    return arr.filter((n) => Number(n) > k).map(Number);
}