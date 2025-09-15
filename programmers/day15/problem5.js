/**
 * 📌 문제 제목: 문자 개수 세기
 * 🐶 난이도: level 0
 * 
 * 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, 
 * my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., 
 * my_string에서 'Z'의 개수, my_string에서 'a'의 개수, 
 * my_string에서 'b'의 개수,..., 
 * my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 * 
 */

function solution(my_string) {
    const arr = Array.from({ length: 52 }).fill(0);

    for(let i = 0; i < my_string.length; i++) {
        const cur = my_string[i];
        const code = cur.charCodeAt();

        if(cur.toUpperCase() === cur) {
            arr[code - 65] += 1;
        } else {
            arr[code - 97 + 26] += 1;
        }
    }
    return arr;
}