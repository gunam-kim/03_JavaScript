/* 
for( [1]초기식 ; [2]조건식 ; [4]증감식 ){
            [3]조건식이 true일 경우 수행할 코드;
        }

    * 처음 for문이 수행될때만 [1]초기식 수행
        -> 두번째 반복부터는 [2]->[3]->[4] 만 반복
*/

/** 콘솔에 12345 출력하기 */
function check1(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);

    console.log("--------------------");

    // for문으로 출력
        // num값이 1부터 5까지 1씩 증가하는 동안 반복
    for( let num = 1; num <= 5; num++ ){
        // [초기식] let num = 1;
            // 1이 저장된 변수 num 선언
        // [조건식] num <= 5
            // num 변수에 저장된 값이 5 이하면 true
                // 반복 (for문 내부 코드 수행)
            // num 변수에 저장된 값이 5 이하가 아니면 false
                // 반복 X (for문 내부 코드 수행 X)
        // [증감식] num++;
            // num 변수에 저장된 값을 반복때마다 1 증가
        console.log(num);
    }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
    for( let num = 1; num <= 10; num++ ){
        console.log(num);
    }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
    for ( let num = 5; num <= 13; num++ ){
        console.log(num);
    }
}

/** 콘솔에 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){
    let result = "";    // 결과를 저장할 변수 result에 ""(빈칸) 대입
        // result에 ""(빈칸)을 대입하는 이유
            // 변수 선언 시 아무런 값도 대입하지 않으면 undefined
            // undefined는 산술 연산의 대상이 될 수 없음
            // 산술 연산을 수행하면 NaN 결과가 반환됨

    for(let num = 1; num <= 7; num++){
        result += num;
            // '' + 1 = '1'
            // '1' + 2 = '12'
    }
    console.log(result);
}

/** 콘솔에 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){
    let result = "";

    for( let num = 4; num <= 11; num++ ){
        result += num;
    }
    console.log(result);
}

/** 콘솔에 1부터 10까지 1씩 증가한 수의 합 구하기 */
    // check4, check5와 유사하지만 저장타입에 따라서 결과가 달라짐
function check6(){
    let sum = 0;    // 합계를 저장할 변수를 선언하고 0을 대입
                        // (더하거나 뺏을 때 영향이 없는 숫자 0 대입)
    for( let num = 1; num <= 10; num++ ){
        sum += num;
    }
    console.log(sum);
}

/** 입력받은 값 사이 정수 값들의 합 구하기 */
function check7(){
    // 모든 값 입력되어있고 입력1이 입력2보다 작다고 가정
    const a = Number(document.getElementById("input7a").value);
    const b = Number(document.getElementById("input7b").value);

    let sum = 0;

    for( let num = a; num <= b; num++ ){
        sum += num;
    }

    alert(`${a}부터 ${b}사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8(){
    let sum = 0;

    for( let num = 1; num <= 10; num += 2 ){
        console.log(num);
        sum += num;
    }
    console.log("합계 : ", sum);
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check9(){
    // 1) 증감식 변경 (이게 더 효율적)
    let result = "";
    for( let num = 3; num <= 30; num += 3){
        result += num + " ";    // 중간에 띄어쓰기
    }
    console.log(result);

    // 2) for문 + if문
    let result2 = "";
    for(let num = 3; num <= 30; num++ ){    // num 1씩 증가
        if(num % 3 === 0){      // 3의 배수
            result2 += num + " ";
        }
    }
    console.log(result2);
}

/** 입력받은 범위 내 지정된 수의 배수를 출력하고 합계 구하기 */
function check10(){
    const start = Number(document.getElementById("start10").value);
    const end = Number(document.getElementById("end10").value);
    const multiple = Number(document.getElementById("multiple10").value);
    let result = "";
    let sum = 0;

    for( let num = start; num <= end; num++ ){
        if(num % multiple === 0){
            result += num + " ";    // 출력 문자열 누적
            sum += num;             // 합계 누적
        }
    }
    console.log(result);
    console.log("합계 : ", sum);
}

/** 구구단 2단 출력하기 */
function check11(){
    for( let num = 1; num <= 9; num++ ){
        console.log(`2 x ${num} = ${num * 2}`)
    }
}

/** 입력받은 수의 구구단 출력하기 */
function check12(){
    const dan = document.getElementById("dan12").value;
    if( dan.length === 0 ){
        alert("단을 입력해주세요");
        return;
    }
    if( dan < 2 || dan > 9 ){
        alert("2~9단 사이만 입력해주세요");
        return;
    }
    for( let num = 1; num <= 9; num++ ){
        console.log(`${dan} x ${num} = ${dan * num}`);
    }
}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check13(){
    for( let num = 10; num >= 1; num-- ){
        console.log(num);
    }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check14(){
    for( let num = 20; num >= 3; num -= 3 ){
        console.log(num);
    }
}

/** 구구단 3단 거꾸로 출력하기 */
function check15(){
    for( let num = 9; num >= 1; num-- ){
        console.log(`3 x ${num} = ${num * 3}`);
    }
}

/** 1부터 30까지 5의 배수마다 @,
 *  10의 배수마다 줄바꿈하면서 출력하기 */
function check16(){
    let result = "";
    for( let num = 1; num <= 30; num++ ){
        if(num % 5 === 0){
            result += "@ ";
        } else {
        result += num + " ";
        }
        
        // 10의 배수마다 줄바꿈
        if(num % 10 === 0){
            result += "<br>";   // 줄바꿈 태그 추가
        }
    }
    // #result16에 출력 (HTML 태그 해석)
    document.getElementById("result16").innerHTML = result;
}


/* 중첩 반복문 */

function check17(){
    for(let row=1; row<=3; row++){          // 3번 출력
        let result = "";
        for(let col=1; col<=4; col++){      // 1234
            result += col;
        }
        console.log(result);
        console.log("----");
    }
}

function check18(){
    for(let row=1; row<=4; row++){
        let result = "";
        for(let col=1; col<=5; col++){
            result += col;
        }
        console.log(result);
        console.log("-----");
    }
}

function check19(){
    for(let row=1; row<=3; row++){
        let result = "";
        for(let col=6; col>=1; col--){
            result += col;
        }
        console.log(result);
        console.log("------");
    }
}

function check20(){
    for(let row = 1; row <= 5; row++){
        let result = "";
        for(let col = 1; col <= row; col++){    // row만큼 반복
            result += col;
        }
        console.log(result);
    }
}

function check21(){
    for(let row = 1; row <= 5; row++){
        let result = "";
        for(let col = 1; col <= row; col++){
            result += col + 2;
        }
        console.log(result);
    }
    console.log("-----");
    for(let row = 3; row <= 7; row++){
        let result = "";
        for(let col = 3; col <= row; col++){
            result += col;
        }
        console.log(result);
    }
}

function check22(){
    for(let row = 1; row <= 3; row++){
        let result = "";
        for(let col = 1; col <= row; col++){
            result += "*";
        }
        console.log(result);
    }
}

function check23(){
    const input = document.getElementById("input23");
    if(input.value.length === 0){       // 미입력 시
        alert("숫자를 입력해주세요");
        return;
    }

    const val = Number(input.value);

    // 입력된 숫자가 0 이하일 경우
    if(val < 0){
        alert("0보다 큰 수를 입력하세요");
        return;
    }

    for(let row = 1; row <= val; row++){
        let result = "";
        for(let col = 1; col <= row; col++){
            result += "*";
        }
        console.log(result);
    }
}

function check24(){
    for(let row = 4; row >= 1; row--){
        let result = "";
        for(let col = 1; col <= row; col++){
            result += "*";
        }
        console.log(result);
    }
    console.log("----");
    for(let row = 1; row <= 4; row++){
        let result = "";
        for(let col = 1; col <= 5-row; col++){
            result += "*";
        }
        console.log(result);
    }
}


/* count */

// 1부터 30사이의 정수 중 4의 배수는 몇개?
function check25(){
    let count = 0;              // 처음에는 세어진게 없음
    for(let num = 1; num <= 30; num++){
        if(num % 4 === 0){
            count++;            // count값을 1씩 증가
        }
    }
    console.log("개수 : ", count);
}

// 1부터 100사이의 정수 중 입력받은 값의 배수는 몇개?
function check26(){
    const input = Number(document.getElementById("input26").value);
    let count = 0;
    for(let num = 1; num <= 100; num++){
        if(num % input === 0){
            count++;
        }
    }
    console.log(`1~100 사이 ${input}의 배수는 ${count}개 있습니다`);
}

// count를 이용해 숫자 부여하기
function check27(){
    // 3행 4열 반복
    let count = 1;
    for(let row=1; row<=3; row++){
        let str = "";
        for(let col=1; col<=4; col++){
            str += `${count} `;     // count + " "
            count++;
        }
        console.log(str);           // str(한 행) 출력
    }
    console.log("-------");
    for(let row=1; row<=3; row++){
        let str = "";
        for(let col=1; col<=4; col++){
            str += `${count++} `;     // 후위 연산
        }
        console.log(str);           // str(한 행) 출력
    }
}


/* while문 */

// prompt를 이용해서 입력받은 숫자 모두 더하기
// 단, 취소 입력 시 추가 입력을 받지 않고 누적된 합계를 alert로 출력

    // prompt("내용") : 입력이 포함된 알림창
        // 확인 : 입력한 내용 반환
        // 취소 : null 반환
function check28(){
    let sum = 0;    // 합계 누적용 변수
    let val;        // prompt에 입력된 값을 저장할 변수

    while( (val = prompt("숫자 입력(취소 클릭 시 종료)")) !== null ){
        // sum 누적
        sum += Number(val);
    }
    alert(`합계 : ${sum}`);
}

// 메뉴 주문하기
function check29(){
    // 메뉴 가격을 상수로 선언
    const gimbap = 4000;
    const ramen = 4500;
    const donkkaseu = 9000;

    // 메뉴별 주문 개수를 저장할 카운트변수 선언
    let gCount = 0;
    let rCount = 0;
    let dCount = 0;

    // prompt에 저장된 값을 저장할 변수
    let input;              // undefined
        // undefined와 null은 다름
    while(input !== null){
        input = prompt("메뉴 번호 입력(1.김밥 2.라면 3.돈까스)");
            // prompt에 반환되는 값
                // "1", "2", "3", 잘못된 입력, null(취소)
        
        switch(input){
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("잘못 입력하셨습니다");
        }
    }
    // innerHTML 사용필요
    // 주문된 메뉴만 출력(count변수에 저장된 값이 0 초과)
    let outputHtml = '';    // 출력할 html코드가 포함된 문자열 저장
    if(gCount > 0){
        outputHtml += `<li>김밥(${gCount}개) : ${gimbap * gCount}원</li>`;
    }
    if(rCount > 0){
        outputHtml += `<li>라면(${rCount}개) : ${ramen * rCount}원</li>`;
    }
    if(dCount > 0){
        outputHtml += `<li>돈까스(${dCount}개) : ${donkkaseu * dCount}원</li>`;
    }
    // 합계
    const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu * dCount);

    outputHtml += `<li>합계 : ${sum}원</li>`;

    document.getElementById("result29").innerHTML = outputHtml;
}