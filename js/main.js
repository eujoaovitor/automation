document.addEventListener('DOMContentLoaded', () => {

  const zoomInButton = document.querySelector('.zoom-in');
  const zoomOutButton = document.querySelector('.zoom-out');
  const groupCard = document.querySelector('.group-card');
  const toggleNavbarButton = document.getElementById("toggleNavbarButton");
  const navbar = document.querySelector(".navbar");

  let currentScale = 1; // Valor inicial da escala
  const maxZooms = 5; // Máximo de zooms permitidos

  zoomInButton.addEventListener('click', () => {
    if (currentScale < 1.5) { // Verifica se a escala não ultrapassa o limite
      currentScale += 0.1; // Incrementa o valor da escala
      groupCard.style.transform = `scale(${currentScale})`; // Aplica a nova escala
    }
  });

  zoomOutButton.addEventListener('click', () => {
    if (currentScale > 0.6) { // Verifica se a escala não ultrapassa o limite
      currentScale -= 0.1; // Decrementa o valor da escala
      groupCard.style.transform = `scale(${currentScale})`; // Aplica a nova escala
    }
  });

  let navbarOpen = true;

  toggleNavbarButton.addEventListener("click", () => {
    navbarOpen = !navbarOpen;
    if (navbarOpen) {
      navbar.style.transform = "translateX(0)";
      main.style.width = "70%";
    } else {
      navbar.style.transform = "translateX(-320px)";
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".group-card");
  let activeCard = null;
  let offsetX = 0;
  let offsetY = 0;

  cards.forEach(card => {
      card.addEventListener("mousedown", startDragging);
      card.addEventListener("mouseup", stopDragging);
  });

  function startDragging(event) {
      activeCard = event.currentTarget;
      activeCard.style.cursor = "grabbing";

      offsetX = event.clientX - activeCard.getBoundingClientRect().left;
      offsetY = event.clientY - activeCard.getBoundingClientRect().top;

      document.addEventListener("mousemove", dragCard);
  }

  function dragCard(event) {
      if (activeCard) {
          const x = event.clientX - offsetX;
          const y = event.clientY - offsetY;
          activeCard.style.transform = `translate(${x}px, ${y}px)`;
      }
  }

  function stopDragging() {
      if (activeCard) {
          activeCard.style.cursor = "grab";
          document.removeEventListener("mousemove", dragCard);
      }
  }
});