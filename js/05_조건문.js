/** if 예제 - 양수인지 검사 */
function check1(){
    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 val 상수에 저장
    const val = Number(in1.value);

    // 양수가 맞는지 검사
    if(val > 0){
        alert(`${val} 은/는 양수입니다.`);    // 브라우저 알림창 띄우기
    }

    // 양수가 아닌 경우
    if(val <= 0){
        alert(`${val} 은/는 양수가 아닙니다.`);
    }
}


/** 난수 홀/짝 확인하기 */
// 난수 발생 : Math.random()   0.0 <= 난수 < 1.0
    // 1~100 사이 난수 발생하려면
    // Math.random() * 100 + 1
    // 소수점도 있으므로 내림 처리
    // Math.floor(Math.random() * 100 + 1)
function check2(){
    // 1~100 사이 난수를 발생시켜 randomNumber변수에 저장
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    // 발생된 난수가 홀수인지 검사
    if(randomNumber % 2 === 1){
        alert(`${randomNumber}은/는 [홀수] 입니다`);
    }
    // 발생된 난수가 짝수인 경우
    else{
        alert(`${randomNumber}은/는 [짝수] 입니다`);
    }
}


/** 양수,0,음수 확인하기 */
function check3(){
    const input3 = document.getElementById("input3");
    const val = Number(input3.value);
    let result; // 결과를 저장할 변수 선언 (현재 undefined)

    // 양수 판별
    if(val > 0){
        result = "양수";
    }
    // 음수 판별
    else if(val < 0){
        result = "음수";
    }
    else{
        result = "0";
    }

    // if / else if / else에 모두 result값 대입 코드 작성
    // 무조건 result에는 값이 대입되도록 되어있다

    alert(`${val}은/는 ${result}입니다`);
}


/* (실습문제) */
// 1번째 풀이
function ageCheck(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value);
    let result;

    if((age >= 0) && (age <= 13)){
        result = "어린이입니다";
    }
    else if((age > 13) && (age <= 19)){
        result = "청소년입니다";
    }
    else if((age > 19) && (age <= 120)){
        result = "성인입니다";
    }
    else{
        result = "잘못 입력하셨습니다.";
    }

    alert(`${result}`);
}
// 2번째 풀이 (더 간단하게)
function ageCheck2(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value);
    let result;

    // 잘못 입력된 경우부터
    if(age < 0 || age > 120){
        result = "잘못 입력하셨습니다.";
    } else if(age <= 13){
        result = "어린이입니다";
    } else if(age <= 19){
        result = "청소년입니다";
    } else {
        result = "성인입니다";
    }
    alert(`${result}`);
}

/*
    input 요소에 작성된 값 얻어오기 : input요소.value
    html 요소에 작성된 내용 얻어오기 : html요소.innerText
*/


/* 두 수 A,B를 입력받아 A가 B의 배수가 맞는지 확인 */
function check4(){
    // id가 inputA, inputB인 요소를 얻어와 변수에 저장
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");

    // 1) A, B 중 하나라도 입력되지 않을 경우
        // "string".length : 문자열의 길이 반환
    // inputA 또는 inputB 중 하나라도 입력되지 않은 경우
    if(inputA.value.length === 0 || inputB.value.length === 0){
        alert("입력되지 않은 값이 존재합니다");
        return;     // 함수를 즉시 종료하고 호출한 곳으로 돌아감
                    // 함수를 수행할 수 없는 상태여서 미리 종료
    }
    // 위 if문을 건너뜀 == 둘 다 입력된 상태

    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);

    // 2) A가 B보다 작을 경우
    if(v1 < v2){
        alert("A가 B보다 작습니다");
        return;
    }
    // 위 if문을 건너뜀 == A,B가 모두 입력됨 + A가 B보다 크거나 같음

    // 3) A가 B보다 클 경우
    if(v1 % v2 === 0){      // A가 B의 배수이다
        alert(`${v1}은 ${v2}의 배수가 맞습니다`);
        return;
    }

    alert(`${v1}은 ${v2}의 배수가 아닙니다`);
}



/* 입력된 수가 3,4,5가 맞는지 확인 */
function check5(){
    const input5 = document.getElementById("input5");

    // 입력된 값이 없을 경우
    if(input5.value.length === 0){
        alert("숫자를 입력해주세요");
        return;
    }

    let result;     // 결과 저장용 변수

    switch( Number(input5.value) ){
        case 3 : result = "입력된 숫자는 3입니다"; break;
        case 4 : result = "입력된 숫자는 4입니다"; break;
        case 5 : result = "입력된 숫자는 5입니다"; break;
        default : result = "3,4,5가 아닌 다른 숫자가 입력되었습니다";
    }
    alert(result);

    /* switch문 -> if else문으로 변경 */
    let result2;
    if( Number(input5.value) === 3 ){
        result2 = "3이 입력되었습니다";
    } else if( Number(input5.value) === 4 ){
        result2 = "4이 입력되었습니다";
    } else if( Number(input5.value) === 5 ){
        result2 = "5이 입력되었습니다";
    } else{
        result2 = "3,4,5가 아닌 다른 숫자가 입력되었습니다";
    }
    alert(result2);
}


// 매개 변수(Parameter)
// - 함수가 호출될 때 전달된 값(Argument)을 저장하기 위한 변수

/** switch문을 이용한 계산기 */
function calc(op){
    console.log("매개변수 op 확인 : ", op, typeof op);

    // 숫자가 입력되는 input요소 얻어와 변수에 저장
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    // 숫자가 둘 중 하나라도 입력되지 않은 경우
    if(number1.value.length === 0 || number2.value.length === 0){
        alert("숫자를 모두 입력해주세요");
        return;
    }

    // number타입으로 입력받은 값 변경
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);

    let result;

    // 전달받은 매개 변수(op)값에 따라 서로 다른 연산 수행
    switch(op){
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result = n1 / n2; break;
        case '%' : result = n1 % n2; break;
        default : result = "잘못된 연산자입니다";
    }
    // 결과를 #calcResult 요소의 내용으로 출력
    document.getElementById("calcResult").innerText = result;
}


/* 입력받은 월의 알맞은 계절 출력 */
function check6(){
    const input6 = document.getElementById("input6");
    
    if(input6.value.length === 0){
        alert("월을 입력해주세요");
        return;
    }

    // break
        // 현재 case까지만 해석하고 switch문을 멈춤
    // break 미작성 시
        // 현재 case 수행 후 멈추지 않고
        // 다음 case를 연달아 수행
        // break 또는 switch 끝 }를 만날때까지 연달아 수행

    let result;
    switch( Number(input6.value) ){
        case 3: case 4: case 5: result = "봄"; break;
        // case 3,4,5 :     Java만 사용가능 (JS 사용불가)

        case 6: case 7: case 8: result = "여름"; break;

        case 9: case 10: case 11: result = "가을"; break;

        case 12: case 1: case 2: result = "겨울"; break;

        default: result = "잘못 입력하셨습니다";
    }
    alert(result);
}