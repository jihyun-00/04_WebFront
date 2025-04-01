// 문자열.toLowerCase() : 영어를 모두 소문자로 변경(A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경(a -> A)

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keyup : 눌러지던 키가 떼어졌을 때(1회만 인식)

const q = document.querySelector(".key:first-child");
const w = document.querySelector(".key:nth-child(2)");
const ee = document.querySelector(".key:nth-child(3)");
const r = document.querySelector(".key:last-child");

const divs = document.querySelector(".key-box");

document.addEventListener("keydown", function(e){

  // e : 이벤트 객체 (발생한 이벤트 정보를 담고있는 객체)
  console.log(e);

  if(e.key.toLocaleLowerCase() == "q"){ 
    q.style.backgroundColor="deeppink";
  }

  if(e.key.toLocaleLowerCase() == "w"){ 
    w.style.backgroundColor="deeppink";
  }

  if(e.key.toLocaleLowerCase() == "e"){ 
    ee.style.backgroundColor="deeppink";
  }

  if(e.key.toLocaleLowerCase() == "r"){
    r.style.backgroundColor="deeppink";
  }
});

document.addEventListener("keyup", function(e){
  if(e.key.toLocaleLowerCase() == "q"){ 
    q.style.backgroundColor="";
  }

  if(e.key.toLocaleLowerCase() == "w"){ 
    w.style.backgroundColor="";
  }

  if(e.key.toLocaleLowerCase() == "e"){ 
    ee.style.backgroundColor="";
  }

  if(e.key.toLocaleLowerCase() == "r"){ 
    r.style.backgroundColor="";
  }
 
});



// // 풀이
// const keys = document.querySelector(".key");
// document.addEventListener("keydown", function(e){
//   console.log(e.key);

//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toLocaleLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일치하는 keys 배열의 요소의 배경색 변경
//   keys[idx].style.backgroundColor = "deepPink";

// });

// document.addEventListener("keyup", function(e){
//   console.log(e.key);

//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toLocaleLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일치하는 keys 배열의 요소의 배경색 변경
//   keys[idx].style.backgroundColor = "";

// });



// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color) {
                    // e : 이벤트 종류 객체
                    // color : 색상
                    
  const keyMap = {'q':0, 'w':1, 'e':2, 'r':3};

  const idx = keyMap[e.key.toLowerCase()];

  // keyMap에 없는 값 입력됐을 때 idx는 undefined
  if(idx != undefined) {
    keys[idx].style.backgroundColor = color;
    // keys[idx] 요소 배경색을 매개변수로 전달받은 color 변경
  }
}

// 키가 눌렀을 때 실행
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink"));
// () => changeKeyColor() == function () { changeKeyColor() }
document.addEventListener("keyup", (e) => changeKeyColor(e, ""));