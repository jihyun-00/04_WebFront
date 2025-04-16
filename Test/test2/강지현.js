const container = document.querySelector("#container");
const wid = document.querySelector("#wid");
const hei = document.querySelector("#hei");

document.querySelector("#setBtn").addEventListener("click", () => {
  container.style.display=flex;
  container.style.width=wid.value;
  container.style.height=hei.value;
});