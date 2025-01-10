/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달받은 값이 양수/음수/0 인지 판별해서 출력 
 * @param num : 전달받은 숫자
*/
function testFn1(num){
    let str = "";
    if(num ===0){
        str = "0";
    } else if(num > 0){
        str = "양수";
    } else{
        str = "음수";
    }

    alert(`${num}은/는 ${str} 입니다`);
}

    // #btn1이 클릭되었을 때
    btn1.addEventListener("click", function(){
    // #input1인 요소에 작성된 값을 얻어와 number타입으로 변환
    const val = Number(input1.value);

    // 함수 호출
    testFn1(val);   // 입력값 전달
    });



/* 입력받은 수 3개의 합 구하기 */
/** 전달받은 배열 내 요소의 합 출력하기 
 * @param arr : number만 저장된 1차원 배열
*/
function sumArr(arr){
    let sum = 0;
    for(let num of arr){    // arr 배열에 저장된 요소를 0번부터 순서대로
                            // 하나씩 꺼내 num에 저장
        sum += num;
    }
    alert(`합계 : ${sum}`);
}
    /* 합계 구하기 */
    const btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", function(){
    const inputs = document.querySelectorAll("[name = input2]");

    // input에 작성된 값을 얻어와 배열 하나 생성
    const arr = [];     // 빈 배열 생성
    for(let input of inputs){
        arr.push( Number(input.value) );
        // 배열.push(값) : 값을 배열 마지막 요소로 추가
    }

    // 함수 호출
    sumArr(arr);
    });



/* 입력받은 값 A가 B의 배수가 맞는지 확인하기 */
/** 배수 확인 함수 
 * @param a : 확인해야 되는 수
 * @param b : 기준이 되는 수
*/
function multipleFn(a, b){
    let str = "";
    if(a % b === 0){
        str = "맞습니다";
    } else{
        str = "아닙니다";
    }
    alert(`${a}은/는 ${b}의 배수가 ${str}`);
}
    /* 배수 */
    const btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", function(){
        const inputs = document.querySelectorAll("[name = input3]");
        const a = Number(inputs[0].value);
        const b = Number(inputs[1].value);
        multipleFn(a, b);
    })



/* return 확인 1 */

/** num의 x제곱 값을 반환하는 함수 
 * @param num : 곱해질 정수
 * @param x : 지수
 * @return : num의 x제곱
*/
function pow(num, x){
    let result = 1;     // 곱셈,나눗셈 시 영향없는 수
    for(let i = 0; i < x; i++){
        result *= num;  // result에 num을 계속 곱함
    }
    return result;      // 함수 종료. 호출한곳으로 result가지고 돌아감
}

/** 제곱의 결과를 문자열로 변환해서 반환하는 함수 
 * @param num
 * @param x
 * @param result : num의 x제곱
 * @return : "num의 x제곱은 result입니다"
*/
function createStr(num, x, result){
    return `${num}의 ${x}제곱은 ${result}입니다`;
}

// 버튼 클릭 시 prompt를 이용해서 정수,지수 입력받아 결과 출력
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function(){
    const num = Number(prompt("정수 입력"));
    const x = Number(prompt("지수 입력"));

    alert ( createStr( num, x, pow(num, x) ) );
});



/* return 확인 2 */
/** prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함수 
 * @param num : 입력받을 수의 개수
 * @return arr : 입력받은 수가 저장된 배열
*/
function createArray(num){
    const arr = [];
    for(let i = 0; i < num; i++){
        const val = Number(prompt(`${i}번째 index에 대입할 숫자`));
        arr.push(val);      // 배열 마지막 요소로 val 추가
    }

    return arr;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){
    const arr = createArray(5);     // 생성된 배열을 반환받아 저장
    sumArr(arr);        // 합계 출력 함수 호출 (함수 재사용)
});



/* return 확인 3 */
/** 함수를 반환하는 함수 */
function createCounter(){
    let count = 5;

    const fn = function(){
        count++;
        return count;
    }

    return fn;          // 함수를 반환
}

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){
    const counter = createCounter();    // 반환된 함수를 counter에 저장
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());
});

/*
    Closure
        외부 함수에서
        종료된 내부 함수에 선언된 변수를 사용하는 기술

        특징)
        (1) 데이터 은닉 (private)
            외부에서 직접 접근할 수 없는 상태의 변수를 만들 수 있음
        (2) 상태 유지
            외부에서 함수를 수행한 후에도
            내부 함수의 변수 값이 변한 상태로 유지
*/



/* 매개 변수/return으로 익명 함수 전달하기 */
const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function(){
    const resultFn = testFn7( function(a, b){ return a+b } );
    console.log("resultFn(3): ", resultFn(3));
});
function testFn7(otherFn){
    return function(num){
        return otherFn(10,20) * num;
    };
}



/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow");     // 버튼 4개

// 화살표 함수 기본 형태
arrows[0].addEventListener("click", () => {     // function 생략
    // 전달받은 값 3개의 합을 반환하는 함수
    const sumFn = (a,b,c) => {
        return a+b+c;
    };
    alert(sumFn(50,99,1234));
});

// 매개 변수가 1개인 경우
arrows[1].addEventListener("click", () => {
    // 2제곱 반환 함수
    const square = num => {     // () 생략
        return num * num;
    };
    alert(square(17));
});

// {} 내에 코드가 1줄만 작성된 경우
arrows[2].addEventListener("click", () => {
    const print = str => console.log(str);    // (), {} 생략
    print("안녕하세요");

    const doubleFn = num => num * 2;          // (), return, {} 생략
    print( doubleFn(3) );
});

// object타입을 return하는 경우
arrows[3].addEventListener("click", () => {
    // 배열 반환
    const fn1 = () => [1,2,3];                // 배열은 {}, return 생략 가능
    // 객체 반환
        // JS 객체  { k:v, k:v }
    const fn2 = () => { return {name:"홍길동", age:20} };
                                              // {}, return 생략 불가
    console.log(fn2());
});



/* function(){}과 ()=>{}의 차이점 */

// function(){}의 this 확인
document.querySelector("#btn8").addEventListener("click", function(){
    console.log(this);      // 이벤트가 발생한 요소
});

// ()=>{}의 this 확인
document.querySelector("#btn9").addEventListener("click", () => {
    console.log(this);      // window 객체
    /*
        window 객체란?
        - 창(브라우저) 자체를 나타내는 객체
        - 창 관련 기능을 제공
        (alert, open, prompt, setTimeout, setInterval 등)
    */
});



/* 즉시 실행 함수 */
const str = "A";            // 전역 변수
console.log(str);           // 출력 결과 : A
    ( function(){
        const str = "B";    // {} 내 지역 변수
        console.log(str);   // 출력 결과 : B
    } )();