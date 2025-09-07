/**
 * 📌 문제 제목: 7의 개수
 * 🐶 난이도: level 0
 * 
 * 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
 * 정수 배열 array가 매개변수로 주어질 때, 
 * 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 * 
 */

function solution(array) {
    const str = array.join('');
    const matchesSeven = str.match(/7/g);

    return matchesSeven ? matchesSeven.length : 0;
    
}