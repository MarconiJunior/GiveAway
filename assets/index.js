
let resultado = document.getElementById("resultado")
resultado.style.border = "0px";
function toReset() {
  let min = document.getElementById("num1");
  let max = document.getElementById("num2");
  max = Number.parseInt(max.value)
  min = Number.parseInt(min.value)
  let sort = Math.floor(Math.random() * ((max + 1) - min) + min);
  if (min > max) {
    window.alert("O primeiro número deve ser menor que o segundo!!!")
  } else {
    setTimeout(() => {
      resultado.innerHTML = sort
    }, "500")
  }
}

