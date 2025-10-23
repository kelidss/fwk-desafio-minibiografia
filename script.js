
const contatoBtn = document.getElementById('contatoBtn');
const modalContato = document.getElementById('modalContato');
const fecharModal = document.getElementById('fecharModal');

contatoBtn.addEventListener('click', () => {
  modalContato.classList.add('ativo');
});
fecharModal.addEventListener('click', () => {
  modalContato.classList.remove('ativo');
});
window.addEventListener('click', (e) => {
  if (e.target === modalContato) {
    modalContato.classList.remove('ativo');
  }
});

let slideAtual = 0;
const slides = document.querySelectorAll('.carrossel-slide');
const indicadoresContainer = document.querySelector('.carrossel-indicadores');
let intervaloCarrossel = null;

slides.forEach((_, i) => {
  const indicador = document.createElement('span');
  indicador.classList.add('carrossel-indicador');
  if (i === 0) indicador.classList.add('ativo');
  indicador.addEventListener('click', () => {
    mostrarSlide(i);
    pararCarrossel();
    iniciarCarrossel();
  });
  indicadoresContainer.appendChild(indicador);
});

function mostrarSlide(n) {
  slideAtual = (n + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideAtual);
  });
  const indicadores = document.querySelectorAll('.carrossel-indicador');
  indicadores.forEach((ind, i) => {
    ind.classList.toggle('ativo', i === slideAtual);
  });
}

function iniciarCarrossel() {
  intervaloCarrossel = setInterval(() => {
    mostrarSlide(slideAtual + 1);
  }, 4000);
}

function pararCarrossel() {
  clearInterval(intervaloCarrossel);
}

mostrarSlide(slideAtual);
iniciarCarrossel();

const carrossel = document.querySelector('.carrossel-container');
carrossel.addEventListener('mouseenter', pararCarrossel);
carrossel.addEventListener('mouseleave', iniciarCarrossel);
carrossel.addEventListener('focusin', pararCarrossel);
carrossel.addEventListener('focusout', iniciarCarrossel);