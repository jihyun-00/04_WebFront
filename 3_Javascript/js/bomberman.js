// bomberman.style.transform = 변경된 좌표;

const man = document.querySelector("#bomberman");
const rect = man.getBoundingClientRect();
const box = document.querySelector("#box");

document.addEventListener("keydown", function(e){

  const man = document.querySelector("#bomberman");

  if(e.key == "ArrowRight"){
    man.style.transform += `translateX(10px)`;
  }

  if(e.key == "ArrowLeft"){
    man.style.transform += `translateX(-10px)`;
  }

  if(e.key == "ArrowUp"){
    man.style.transform += `translateY(-10px)`;
  }

  if(e.key == "ArrowDown"){
    man.style.transform += `translateY(10px)`;
  }

  if(e.key == "x"){

    box.innerHTML += `<img src="../../images/bomb.png">`;
  }

  if(e.key == "z"){
    const all = document.querySelectorAll("#box > img");
    all.style.transform = `translateX(rect.left)`
    
    // 모든 이미지 src 변경
      all.forEach((img) => {
        img.src = "../../images/boomm.png";  // 변경할 이미지 경로
    });


  }
});


// console.log(rect.left, "    ", rect.top);