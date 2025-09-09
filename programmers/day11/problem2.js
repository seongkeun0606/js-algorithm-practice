/**
 * 📌 문제 제목: 문자열 묶기
 * 🐶 난이도: level 0
 * 
 * 문자열 배열 strArr이 주어집니다. 
 * strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
 * 
 */

function solution(strArr) {
    const strMap = new Map();
    
    for (let str of strArr) {
        const len = str.length;
        const prev = strMap.get(len) || 0;
        strMap.set(len, prev + 1);
    }

    return Math.max(...strMap.values());
}
