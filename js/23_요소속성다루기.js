/* 속성 관련 메서드 확인 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    const input1 = document.querySelector("#input1");

    // 1. 요소.getAttribute("속성명") : 속성값 얻어오기
    console.log("input의 name 속성 값 : ", input1.getAttribute("name"));

    // 2. 요소.setAttribute("속성명", "속성값") : 요소에 새로운 속성 추가
    input1.setAttribute("type", "checkbox");
        // type 속성 값을 "checkbox"로 추가
    input1.setAttribute("class", "big");
        // class 속성 값을 "big"으로 설정

    // JS 속성 설정 방법 중 class 관련
    // + CSS의 class 기반 설계를 이용해서 HTML요소의 스타일을 변경할 수 있다

    input1.setAttribute("type", "number");
    input1.setAttribute("class", "bg-skyblue");
        // 이미 같은 속성이 존재하면 덮어쓴다

    // 3. 요소.removeAttribute("속성명") : 속성 제거하기
    input1.removeAttribute("class");

    // 4. 요소.hasAttribute("속성명") : 속성 존재 여부 확인
    if( ! input1.hasAttribute("placeholder") ){     // placeholder 속성이 없을 경우
        input1.setAttribute("placeholder", "placeholder 추가됨");
    } else{                                         // placeholder 속성이 있을 경우
        input1.removeAttribute("placeholder");
    }
});



/* 요소 직접 접근 확인 */
const btn2 = document.querySelector("#btn2");
const div2 = document.querySelector("#div2");

btn2.addEventListener("click", ()=>{
    /* tip
    브라우저 콘솔에서 특정 요소가 가지고 있는 DOM속성을 직접 확인하고 싶을 경우
    복수 형태로 요소를 얻어오는 querySelectAll(), getElementsByClassName() 등을 이용
    */

    const inputs = document.querySelectorAll("#input2");
    const divs = document.querySelectorAll("#div2");
    console.log(inputs);
    console.log(divs);

    // id 얻어오기
    console.log(inputs[0].getAttribute("id"));
    console.log(inputs[0].id);
        // console.log(inputs[0].getAttribute("id"));와 같은 결과
    
    // name 얻어오기
    console.log("#input2의 name : ", inputs[0].getAttribute("name"));
    console.log("#input2의 name : ", inputs[0].name);
        // console.log("#input2의 name : ", inputs[0].getAttribute("name"));와 같은 결과
    console.log("#div2의 name : ", divs[0].name);
        // undefined
    
    // value 얻어오기
    console.log("#input2의 value : ", inputs[0].getAttribute("value"));
    console.log("#input2의 value : ", inputs[0].value);
        // console.log("#input2의 value : ", inputs[0].getAttribute("value"));와 같은 결과
    console.log("#div2의 value : ", divs[0].value);
        // undefined
});



/* classList 테스트 */
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");
const btnContainer = document.querySelector(".btn-container");

// 추가 버튼 클릭 시
addBtn.addEventListener("click", ()=>{
    // 요소.classList.contains("클래스명")
        // 요소에 클래스가 포함되어 있으면 true, 없으면 false
    console.log( btnContainer.classList.contains("hidden") );   // true

    // 화면에 안보이는 경우
    if( btnContainer.classList.contains("hidden") ){
        btnContainer.classList.remove("hidden");
        // 요소.classList.remove("클래스1", ...)
            // 클래스 제거

        addBtn.classList.add("hidden");
        // 요소.classList.add("클래스1", ...)
    }
});

// 종료 버튼 클릭 시
closeBtn.addEventListener("click", ()=>{

    // .btn-container가 hidden 클래스를 포함하지 않을 경우
    if( ! btnContainer.classList.contains("hidden") ){
        btnContainer.classList.add("hidden");
        addBtn.classList.remove("hidden");
    }
});

/*
    - 요소.style.css 속성 방법은 inline-style로 적용되기 때문에
    HTML의 복잡도가 늘어나는 문제가 발생한다
    단, class를 이용한 CSS를 덮어씌울 목적인 경우 사용 (CSS 선택자 우선순위)
        * CSS 선택자 우선순위
            1) !important
            2) inline-style
            3) id 선택자
            4) class 선택자
            5) tag 선택자

    - class를 이용한 CSS 스타일 제어하는 방법이 제일 많이 사용됨
        -> HTML 복잡도가 낮아진다
*/

addBtn.addEventListener("click", ()=>{
    const container = document.querySelector(".container-3");
    // container.style.backgroundColor = "pink";
    // container.style.border = "5px double red";
    // container.style.width = "300px";
    // container.style.height = "150px";

    // class를 추가하여 CSS 변경
    container.classList.add("test");
});

// red,yellow,green 버튼 클릭 시
const container3 = document.querySelector(".container-3");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {    // btn : btns에서 하나씩 꺼낸 요소
    btn.addEventListener("click", ()=>{
        const color = btn.innerText;    // 버튼에 작성된 내용 (색상)

        // 기존에 클릭한 색상 class가 존재하는지 확인
        const classExist =
            container3.classList.contains(`bg-${color}`);

        // container3이 가지고 있는 bg-로 시작하는 class 모두 제거
        container3.removeAttribute("class");        // container3의 class를 모두 지우고
        container3.classList.add("container-3");    // container-3의 class를 추가

        if( classExist === false ){
            container3.classList.toggle(`bg-${color}`);
            // 요소.classList.toggle("클래스명")
                // 요소에 클래스가 있으면 제거, 없으면 추가
        }
    });
} );

// 수정 버튼 클릭 시
const modifyBtn = document.querySelector("#modifyBtn");
modifyBtn.addEventListener("click", ()=>{

    // bg-green <-> br-red 변경
    if( modifyBtn.classList.contains("bg-green") ){
        modifyBtn.classList.replace("bg-green", "bg-red");
    } else{
        modifyBtn.classList.replace("bg-red", "bg-green");
    }
});

// 삭제 버튼 클릭 시