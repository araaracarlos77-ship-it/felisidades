const canvas = document.getElementById("cartaCanvas");
const ctx = canvas.getContext("2d");
const papel3d = document.getElementById("papel3d");
const papelMsg = document.getElementById("papelMsg");
const closeBtn = document.getElementById("closeBtn");
const subtitle = document.getElementById("subtitle");
const bgFade = document.getElementById("bgFade");

const openSound = document.getElementById("openSound");
const closeSound = document.getElementById("closeSound");
const bgMusic = document.getElementById("bgMusic");

let open = false;

// ✨ Carta cerrada morada
function drawCarta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Cuerpo blanco
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(50, 80, 300, 150);

  // Borde morado
  ctx.strokeStyle = "#b37bff";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 80, 300, 150);

  // Tapa superior morada pastel
  ctx.fillStyle = "#d7b3ff";
  ctx.beginPath();
  ctx.moveTo(50, 80);
  ctx.lineTo(200, 180);
  ctx.lineTo(350, 80);
  ctx.closePath();
  ctx.fill();
}
drawCarta();

// Texto de la carta
let mensaje = `Hola 💜,

lla se que aller fue tu cunple perdon no me acordaba como sabes tenia artas cosa en la mente que no
me pude acordar que fue tu cunpleaños espero que me perdones,hayer que cunplistes tus 18 años 🎉 Quiero que sepas que eres
una persona😘 increíble y que me siento afortunada de tenerte en mi vida.
Te deseo un día lleno de felicidad, amor y risas.

Que se cumplan todos tus sueños y 😘que la vida te trate con la misma amabilidad🎉
y generosidad que tú tienes con los demás.

Recuerda que siempre estaré aquí para ti😘, 
en los buenos y en los malos momentos. Eres una amiga excepcional y te quiero mucho.🎉

¡Feliz cumpleaños, amiga mía! Que este año sea el mejor de todos.
. 🌷
Con todo cariño tu amigo,
Carlos`;


// Máquina de escribir
function escribirTexto(texto, elemento, velocidad = 50) {
  elemento.innerHTML = "";
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, velocidad);
}

// Corazones morados flotando
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💜😘🌷";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.bottom = "0px";
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 4000);
}


// Abrir la carta
canvas.addEventListener("click", () => {
  if (!open) {
    open = true;

    gsap.to(canvas, { y: -80, opacity: 0, duration: 1 });

    setTimeout(() => {
      papel3d.classList.add("visible");
      escribirTexto(mensaje, papelMsg, 45);

      bgFade.classList.add("bg-fade-dark");
      closeBtn.classList.add("visible");
      subtitle.style.opacity = 0;

      openSound.play();
      bgMusic.play();

      setInterval(crearCorazon, 400);

    }, 800);
  }
});

// Cerrar carta
closeBtn.addEventListener("click", () => {
  open = false;

  papel3d.classList.remove("visible");
  bgFade.classList.remove("bg-fade-dark");
  closeBtn.classList.remove("visible");

  gsap.to(canvas, { y: 0, opacity: 1, duration: 1 });

  subtitle.style.opacity = 1;

  closeSound.play();
  bgMusic.pause();
});
