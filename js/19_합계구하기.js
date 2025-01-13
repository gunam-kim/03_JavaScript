/* 계산하기 */
const calc = document.querySelector("#calc");
calc.addEventListener("click", () => {
    // 계산 버튼이 클릭되는 시점에 존재하는 .input-number요소를
    // 모두 얻어와 작성된 값의 합계를 구해서 출력하기
    const inputs = document.querySelectorAll(".input-number");
    let sum = 0;
    for(let input of inputs){
        sum += Number(input.value);
    }
    alert(`합계 : ${sum}`);
});


/* 추가하기 */
const addBtn = document.querySelector("#add");              // 추가 버튼
const container = document.querySelector(".container");     // 감싸는 요소

addBtn.addEventListener("click", () => {
    // 추가 버튼 클릭 시
    // div,input,span 요소를 만들어서 알맞게 조립한 후
    const div = document.createElement("div");
    div.className = "row";      // 클래스 추가
    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";
    const span = document.createElement("span");
    span.className = "remove-row";
    span.innerHTML = "&times;"; // HTML 특수문자는 innerHTML 사용

    /* 만들어진 span(X버튼) 요소에 이벤트 리스너 추가 */
    span.addEventListener("click", e => {
        // 한줄(.row) 제거
        e.target.parentElement.remove();    // e.target : 클릭된 요소(X버튼)
    });
    /* **************************************************************** */
    
    div.append(input, span);

    // .container의 마지막 자식으로 추가
    container.append(div);
});