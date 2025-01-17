/* for in 확인하기 */
const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", ()=>{

    // JS 객체 생성
    const obj = {
        menu : "제육볶음",
        price : 8000,
        option : {spicy : ["기본","안맵게","아주 맵게"],
                    rice : ["기본","적게","많이"]
                }
    };

    // for in 구문
    for(let key in obj){

        // 객체에 저장된 모든 값 출력
        console.log(`obj[${key}] : ${obj[key]}`);
            /*
            객체에 저장된 값 얻어오기
                1) 객체명.key
                2) 객체명["key"]
            */

        // 만약 꺼내온 key가 "option"인 경우
        if(key === "option"){
            for(let key2 in obj[key]){
                console.log(key2, obj[key][key2]);
                    // obj[key] === obj["option"]
                    // key2 === spicy, rice
            }
        }

        console.log("**************************************************************");
    }
    console.log(obj[menu]);     // menu가 문자열이 아닌 변수명으로 인식되어 오류 발생
                        // 해결 : 문자열로 인식할 수 있게 ""나 ''로 감싸기
                        // 참고 : JS객체의 key는 모두 string 자료형이다
    //
});



/***********************************************************************************/
/* 구조 분해 할당 확인 */
const btn2= document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    const fruits = ['사과', '바나나', '오렌지'];
    const [first, second, third] = fruits;
    console.log("first : ", first);
    console.log("second : ", second);
    console.log("third : ", third);

    const person = {name : "홍길동", age : 25, height : 180};
    const {name, age, height} = person;
    console.log("name : ", name);
    console.log("age : ", age);
    console.log("height : ", height);
});



/***********************************************************************************/
/* 배열 + ... 연산자 */
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", ()=>{
    const arr = [10, 20, 30];
    const copy1 = arr;

    console.log("arr : ", arr);         // [10, 20, 30]
    console.log("copy1 : ", copy1);     // [10, 20, 30]

    copy1[0] = 999;

    console.log("arr : ", arr);         // [999, 20, 30]
    console.log("copy1 : ", copy1);     // [999, 20, 30]
    // 왜 arr[0]이 999로 변했을까? -> 얕은 복사가 되었기 때문에!

    /* 얕은 복사 (Shallow Copy)
        -> 같은 주소를 복사하여 저장한 여러 변수가 하나의 객체를 참조하는 것
    */
    /*******************************************************************************/
    /* 깊은 복사 (Deep Copy)
        -> 객체의 모양과 저장된 값을 그대로 복사 (복제)
    */

    // 전개 연산자 사용
    const copy2 = [...arr];             // [999, 20, 30]
    // arr이 참조하는 값을 얻어와 새로운 배열로 생성
    copy2[1] = 1234;
    console.log("copy2[1] = 1234");
    console.log("arr : ", arr);         // [999, 20, 30]
    console.log("copy2 : ", copy2);     // [999, 1234, 30]
    /*******************************************************************************/
    // 배열 결합 확인
    const students1 = ["홍길동", "둘리", "또치"];
    const students2 = ["짱구", "유리", "맹구"];

    const students3 = [...students1, ...students2];
    console.log("student3 : ", students3);
        // ["홍길동", "둘리", "또치", "짱구", "유리", "맹구"]
    
    // 배열 요소 추가 확인
    const students4 = [...students3, "철수", "희동"];
    console.log("student4 : ", students4);
        // ["홍길동", "둘리", "또치", "짱구", "유리", "맹구", "철수", "희동"]
});



/***********************************************************************************/
/* 객체 + ... 연산자 */
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", ()=>{
    // 객체 복사
    const obj = {id : "user01", pw : "pass01"};
    const copy1 = obj;          // 얕은 복사 (copy1은 obj와 같은 객체 참조)
    const copy2 = {...obj};     // 깊은 복사 (copy2는 obj 복제본 참조)

    copy1.pw = "1q2w3e4r";
    console.log("obj : ", obj);         // pw : 1q2w3e4r
    console.log("copy1 : ", copy1);     // pw : 1q2w3e4r
    console.log("copy2 : ", copy2);     // pw : pass01

    // 객체 병합
    const obj2 = {id : "user02", pw : "pass02"};
    const obj3 = {email : "user02@gmail.com", phone : "01012345678"};

    const obj4 = {...obj2, ...obj3};

    console.log("obj4 : ", obj4);
        // id: 'user02', pw: 'pass02', email: 'user02@gmail.com', phone: '01012345678'

    // 속성 덮어쓰기
    const obj5 = {...obj4, phone : "01099998888"};
    console.log("obj5 : ", obj5);
        // id: 'user02', pw: 'pass02', email: 'user02@gmail.com', phone: '01099998888'
});