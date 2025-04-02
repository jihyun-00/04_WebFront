const container = document.querySelector(".menu-container");

// 수정 버튼 눌렀을 때 기능
document.querySelector("#updateBtn").addEventListener("click", () => {
  document.querySelector("#updateBtn").style.display = "none";
  document.querySelector(".b-hidden").style.display = "block";

  const menuNames = document.querySelectorAll(".menu-name");

  for (let menuName of menuNames) {

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    menuName.before(checkbox);

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.classList.add("menu-name-input");

    menuName.after(input1);

    menuName.style.display = "none";
    input1.style.display = "block";
    input1.value = menuName.innerText;

  }

  // --

  const menuPrices = document.querySelectorAll(".menu-price");

  for (let menuPrice of menuPrices) {

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.classList.add("menu-price-input");

    menuPrice.after(input2);

    menuPrice.style.display = "none";
    input2.style.display = "block";
    input2.value = menuPrice.innerText;

  }

});

// 추가 버튼 눌렀을 때 기능
document.querySelector("#addMenu").addEventListener("click", () => {

  const container = document.querySelector(".menu-container");

  const box = document.createElement("li"); //<li></li>

  box.classList.add("menu");

  container.append(box);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  box.append(checkbox);

  const span1 = document.createElement("span");
  span1.classList.add("menu-name");
  box.append(span1);

  const input1 = document.createElement("input");
  input1.type = "text";
  input1.classList.add("menu-name-input");
  input1.placeholder = "메뉴명";
  box.append(input1);

  const span2 = document.createElement("span");
  span2.classList.add("menu-price");
  box.append(span2);

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.classList.add("menu-price-input");
  input2.placeholder = "가격";

  box.append(input2);

  span1.style.display = "none";
  span2.style.display = "none";




});

// 삭제 버튼 눌렀을 때 기능
document.querySelector("#deleteMenu").addEventListener("click", () => {

  const checkboxs = document.querySelectorAll(".check")

  for (let check of checkboxs) {
    if (check.checked) {
      check.parentElement.remove();

    }

  };

});

// 종료 버튼 눌렀을 때 기능
document.querySelector("#exitBtn").addEventListener("click", () => {

  document.querySelector("#updateBtn").style.display = "block";
  document.querySelector(".b-hidden").style.display = "none";

  const checkboxs = document.querySelectorAll(".check");

  for (let check of checkboxs) {

    check.remove();
  }

  const names = document.querySelectorAll(".menu-name");
  // const nameInput = document.querySelectorAll(".menu-name-input")
  // == name.nextElementSibling

  const prices = document.querySelectorAll(".menu-price");
  // const priceInput = document.querySelectorAll(".menu-price-input")
  // price.nextElementSibling

  // 다음 형제 요소 : nextElementSibling

  for (let name of names) {


    if (name.nextElementSibling.value.length == 0) {

      name.style.display = "flex";
      name.nextElementSibling.style.display = "none";
      name.innerText = "미입력";

    } else {

      name.style.display = "flex";
      name.nextElementSibling.style.display = "none";
      name.innerText = name.nextElementSibling.value;

    }



  }

  for (let price of prices) {

    price.style.display = "flex";
    price.nextElementSibling.style.display = "none";
    price.innerText = price.nextElementSibling.value;

    if (price.nextElementSibling.value.length == 0) {
      price.innerText = "0원";
    }
  }




});

// 식당명 입력하세요 눌렀을 때 기능
document.querySelector("#resName").addEventListener("click", () => {

  document.querySelector("#resNameInput").style.display = "flex";
  document.querySelector("#resName").style.display = "none";


});

// 식당명 입력 후 기능
document.querySelector("#resNameInput").addEventListener("blur", (e) => {
  document.querySelector("#resNameInput").style.display = "none";
  document.querySelector("#resName").style.display = "flex";
  document.querySelector("#resName").innerText = e.target.value;
});



