var count = localStorage.getItem("counterValue") || 0;

document.querySelector("h1").innerText = count;

document.querySelector("#dec").addEventListener("click", decFun);

function decFun() {
  count--;
  document.querySelector("h1").innerText = count;
  localStorage.setItem("counterValue", count);
}

document.querySelector("#inc").addEventListener("click", incFun);

function incFun() {
  count++;
  document.querySelector("h1").innerText = count;
  localStorage.setItem("counterValue", count);
}