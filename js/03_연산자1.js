// (중요!) HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열)


/* 계산기 동작 코드 */

// 전역 변수(어디서든 사용 가능한 변수) 선언
// HTML문서 내에서 id가 "input1"으로 일치하는 요소 얻어오기
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcResult = document.getElementById("calcResult");


/** 더하기 함수 (DOC 주석. 함수 설명 작성용 주석) */
function plusFn(){
    const value1 = Number(input1.value);    // input1.value : input1에 작성된 값 (string)
    const value2 = Number(input2.value);    // Number('숫자형태 문자열') : 숫자로 변경
    // 단, '숫자형태 문자열'이 아닐 경우 NaN(Not A Number) 결과 반환

    console.log("두 수의 합 : ", value1 + value2);

    // 결과(#calcResult)의 내용으로 출력
    calcResult.innerText = value1 + value2;
}

/** 빼기 함수 */
function minusFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    calcResult.innerText = value1 - value2;
}

/** 곱하기 함수 */
function multiFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    calcResult.innerText = value1 * value2;
}

/** 나누기 함수 */
function divFn(){
    calcResult.innerText = Number(input1.value) / Number(input2.value);
}

/** 나머지 함수 */
function modFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    calcResult.innerText = value1 % value2;
}


/* Number(input1.value)가 계속 반복되는데 전역변수로 선언하면 안될까? */
// 전역변수는 페이지 로딩 시점에 해석되서 값이 결정된다
// input에 작성된 값이 없어서 Number(input1.value)==0
// (해결방법)
// 값을 입력한 후 함수를 호출해서 함수가 호출되는 시점의
// 입력된 값을 읽어올 수 있게 만든다



// =================================================================
/* 산술 연산자 응용 */
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

// 첫번째 값 X 2
function doubleFn(){
    const value3 = Number(input3.value);

    calcResult2.innerText = value3 * 2;
}

// 두번째 값 제곱
function squareFn(){
    const value4 = Number(input4.value);

    calcResult2.innerText = value4 * value4;
}

// 모든 산술 연산 결과 일괄 출력
function allOperationFn(){
    const v1 = Number(input3.value);
    const v2 = Number(input4.value);

    // 각각의 연산 결과를 별도의 변수에 저장
    const plus = v1 + v2;
    const minus = v1 - v2;
    const multi = v1 * v2;
    const div = v1 / v2;
    const mod = v1 % v2;

    // 요소.innerText = 문자열;
    // <span>내용</span> : 내용 부분에 문자열 대입(출력)
    // HTML 코드 해석 X

    // 요소.innerHTML = 문자열;
    // <span>내용</span> : 내용 부분에 문자열 대입(출력)
    // HTML 코드 해석 O

    calcResult2.innerHTML =
    "<ul>" 
    + "<li> + 결과 : " + plus + "</li>"
    + "<li> - 결과 : " + minus + "</li>"
    + "<li> * 결과 : " + multi + "</li>"
    + "<li> / 결과 : " + div + "</li>"
    + "<li> % 결과 : " + mod + "</li>"
    + "</ul>";
}


// ================================================================
const countResult = document.getElementById("countResult");
/* 증감 연산자를 이용해 1씩 증가하는 함수 */
function increase(){
    // 요소.innerText = 문자열;     문자열 화면에 출력
    // 요소.innerText;             요소에 작성된 내용 얻어오기

    // 1) countResult에 작성된 내용(숫자) 얻어오기
    let count = Number(countResult.innerText);
    // 2) 얻어온 숫자를 1 증가시켜 출력하기
    countResult.innerText = ++count;
}


/* 증감 연산자를 이용해 1씩 감소하는 함수 */
function decrease(){
    let count = Number(countResult.innerText);
    countResult.innerText = --count;
}


/* 전위/후위 연산 확인하기 */
// 연산이란?
// - 컴퓨터가 코드/값을 읽고 실행하는 행위
// ex) +, -, *, /, %, ++, --,
// 변수에 값 대입, console 출력, innerText ...

function checkFn(){
    let num = 100;

    // 전위 연산 : 다른 연산보다도 최우선으로 실행
    console.log("++num : ", ++num); // num값이 1 증가한 후 콘솔에 출력 (101)
    console.log("++num : ", ++num); // 102 출력
    console.log("++num : ", ++num); // 103 출력

    console.log("---------------");

    // 후위 연산 : 다른 연산보다도 나중에 실행
    num = 100;
    console.log("num++ : ", num++); // 100 콘솔에 출력하고 num값 1 증가
    console.log("num++ : ", num++); // 101 출력 -> num 1 증가
    console.log("num++ : ", num++); // 102 출력 -> num 1 증가

    console.log("num 확인 : ", num); // 103 출력

    // 문제
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    // a,b,c 값은
    // a=11 b=4 c=55
    console.log(a,b,c);
}