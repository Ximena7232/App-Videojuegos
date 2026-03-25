const pantalla = document.getElementById("pantalla");

document.getElementById("btnJugar").addEventListener("click", () => {
    pantalla.textContent = "¡El juego comienza! 🚀";
});

document.getElementById("btnOpciones").addEventListener("click", () => {
    pantalla.textContent = "Menú de opciones abierto ⚙️";
});

document.getElementById("btnSalir").addEventListener("click", () => {
    pantalla.textContent = "Has salido del juego 👋";
});

