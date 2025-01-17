/* 번호를 눌렀을 때 */
    // #result에 출력

const number = document.querySelectorAll(".number");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
let output = document.querySelector("#result");
let list = document.querySelector(".list");

number.forEach((num)=>{
    num.addEventListener("click", () => {
        document.querySelector("#result").innerText += num.innerText;
    });
})

/* 초기화 눌렀을 때 */
reset.addEventListener("click", ()=>{
    result.innerHTML = "";
});


/* 추가 눌렀을 때 */
add.addEventListener("click", ()=>{
    
    // console.log(output.innerText);

    // 한줄 역할하는 div 생성
    const div = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

    span1.innerText = output.innerText;
    span2.innerText = "☆";
    span3.innerHTML = "&times;";


    // 버튼
    span3.addEventListener("click", ()=> {
        div.remove();
    });

    span2.addEventListener("click", ()=>{
        if(span2.innerText === "☆"){
            span2.innerText = "★";
            span2.style.color = "orange";
            span1.style.color = "red";
        } else{
            span2.innerText = "☆";
            span2.style.color = "black";
            span1.style.color = "black";
        }
    });

    div.append(span1, span2, span3);
    list.append(div);
    output.innerText = "";
});