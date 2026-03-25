const botonesMenu = document.querySelectorAll(".menu button");
const secciones = document.querySelectorAll(".seccion");

botonesMenu.forEach((btn, index) => {
  btn.addEventListener("click", () => {
   
    secciones.forEach(sec => sec.classList.remove("activa"));
   
    secciones[index].classList.add("activa");
  });
});


document.getElementById("btnInfo").addEventListener("click", () => {
  const extraInfo = document.getElementById("extraInfo");
  extraInfo.classList.toggle("hidden");
});

