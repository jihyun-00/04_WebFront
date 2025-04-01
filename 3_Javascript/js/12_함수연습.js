// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`Hello, ${name}!`);
}

fn1("지현");

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
const fn2 = (a, b) => {
  return a+b;
};

console.log("2번 : ", fn2(2,3));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
const fn3 = (a, b) => { return a*b; }

console.log("3번 : ", fn3(2,3));

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면
// "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를
// 출력하는 함수를 선언 및 정의하고 호출하시오
const fn4 = (a, b) => {
  a = prompt("첫번째 숫자를 입력하세요.")
  b = prompt("두번째 숫자를 입력하세요.")

  if(a.length==0 || b.length==0){
    alert("숫자를 입력하세요.")
  } else if(a>b){
    alert("첫번째 숫자가 더 큽니다.");
  } else {
    alert("두번째 숫자가 더 크거나 같습니다.");
  }
}

// fn4();

// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn5(str) {
  // str=prompt("문자열을 입력하세요.");
  // alert(`${str.length}`);
  console.log(`${str.length}`)
}

fn5("안녕하세요.");


// 6. 문자열과 반복 횟수를 매개변수로 받아,
// 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
function fn6(str, count) {

  const arr = [];

  for(let i=0; i<=count; i++){
    arr[i] = str;
    console.log(`${(i+1)} : ${arr[i]}`);
  }
}

fn6("하이", 2);

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를
// 선언 및 정의하고 호출하시오
const fn77 = function fn7(num) {

  return num%2==0;

}

console.log(fn77(7));

// 8. 세 개의 숫자를 매개변수로 받아
// 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
function fn8(a, b, c) {
  // if(a>b && a>c){
  //   return a;
  // } else if(b>a && b>c){
  //   return b;
  // } else if(c>a && b>a){
  //   return c;
  // }

  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  return Math.max(a, b, c); //-> 이걸 이용하면 한번에 끝낼 수 있음
};

console.log(fn8(2,5,3));

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는
// 화살표 함수를 선언 및 정의하고 호출하시오
const fn9 = (arr) => {
  return arr[0];
};

console.log(fn9(["바나나", "딸기"]));

// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을
// 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
const fn10 = (arr) => {

  // let sum=0;

  // for(let i=0; i<arr.length; i++){
  //   sum += arr[i];
  // }

  let sum = arr.reduce( (acc, curr) => { return acc + curr } );
  // 배열.reduce(callback함수) :  JS 배열의 메서드로(함수), 배열의 모든 요소를 순회하면서
  // 하나의 결과값을 누적하여 반환
  // acc(accumulator) : 이전 콜백 호출에서 반환된 값(누산기 - 결과 누적)
  // curr(currentValue) : 현재값 - 현재 처리 중인 배열 요소 값

  let avg = sum/arr.length;

  return { "sum" : sum, "avg" : avg }
};

console.log(fn10([1,2,3,4,5]));


// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아,
// 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
function fn11 (a, b, calc) {

  return calc(a,b);

};

function plus(a,b){
  return a+b;
}

function minus(a,b){
  return a-b;
}

function divide(a,b){
  return a/b;
}

function multi(a,b){
  return a*b;
}

console.log(fn11(2,3,plus));


// 12.
// 1. 사람의 이름과(string) 2. 인사말을 출력하는 함수(function)를 [매개변수]로 받아,
// 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오
const fn12 = (name, hiFn) => {
  return `${hiFn} ${name}입니다.`;
};

const hiFn = function(str) {
  return str;
}

console.log(fn12("지현", hiFn("안녕하세요.")));
