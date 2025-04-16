document.getElementById("setBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const wid = document.getElementById("wid").value;
  const hei = document.getElementById("hei").value;
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;
  const back = document.getElementById("back").value;
  const text = document.getElementById("horse").value;

  const weight = document.querySelector("input[name='weight']:checked");
  const fontWeight = weight.value;

  const colAlign = document.querySelector("input[name='col']:checked");
  const justifyContent = colAlign.value;

  const rowAlign = document.querySelector("input[name='row']:checked");
  const alignItems = rowAlign.value;



  const container = document.getElementById("container");
  container.style.width = wid + "px";
  container.style.height = hei + "px";
  container.style.fontSize = fontSize + "px";
  container.style.color = fontColor;
  container.style.backgroundColor = back;
  container.style.fontWeight = fontWeight;
  container.style.display = "flex";
  container.style.justifyContent = justifyContent;
  container.style.alignItems = alignItems;
  container.style.border = "1px solid black";
  container.textContent = text;
});