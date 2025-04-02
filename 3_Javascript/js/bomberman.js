let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수


document.addEventListener("keydown", function(e){

  const man = document.querySelector("#bomberman");

  console.log(e.key);

  if(e.key == "ArrowRight"){
    xindex += 10;
  } else if(e.key == "ArrowLeft"){
    xindex -=10;
  } else if(e.key == "ArrowUp"){
    yindex -=10;
  } else if(e.key == "ArrowDown"){
    yindex +=10;
  } else if(e.key == "x"){

    const box = document.querySelector("#box");
    box.innerHTML += `<img src="../../images/bomb.png" 
    class="bomb"
    style="transform: translate(${xindex}px, ${yindex}px);
    position: absolute">`;

  } else if(e.key == "z"){

    explodeBomb();

  } else {
    alert("방향키, z, x만 가능");
  }

  man.style.transform = `translate(${xindex}px, ${yindex}px)`;

});

const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");
  // bombs 유사배열 형태

  // for .. of 문 : 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  for(let bomb of bombs){
    bomb.src = "../../images/boomm.png";

  }

}

