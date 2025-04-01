const boxs = document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function() {

  for(let i=0; i<boxs.length; i++){
    boxs[i].style.backgroundColor = input[i].value;
  }

});