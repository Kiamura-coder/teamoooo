const btnSurpresa = document.getElementById('btn-surpresa');
const surpresa = document.getElementById('surpresa');
const textoAmor = document.getElementById('textoAmor');
const btnVoltar = document.getElementById('btn-voltar');

btnSurpresa.addEventListener('click', () => {
  if (surpresa.style.display === 'none') {
    surpresa.style.display = 'block';
    textoAmor.style.display = 'block';
    btnVoltar.style.display = 'inline-block';
    btnSurpresa.textContent = '💖 Que bom que gostou!';
    btnSurpresa.disabled = true;
  }
});

btnVoltar.addEventListener('click', () => {
  // Reseta tudo para voltar para a entrada
  btnSurpresa.disabled = false;
  btnSurpresa.textContent = 'Clique aqui para uma surpresa';
  surpresa.style.display = 'none';
  textoAmor.style.display = 'none';
  btnVoltar.style.display = 'none';

  conteudo.style.display = 'none';
  entrada.style.display = 'flex';

  // Zera contagem
  cliques = 0;
  contadorCliques.textContent = `${cliques} / ${cliquesNecessarios}`;
});

// Controle da tela de entrada
const coracaoEntrada = document.getElementById('coracao-entrada');
const contadorCliques = document.getElementById('contadorCliques');
const entrada = document.getElementById('entrada');
const conteudo = document.getElementById('conteudo');

let cliques = 0;
const cliquesNecessarios = 5;

coracaoEntrada.addEventListener('click', () => {
  cliques++;
  contadorCliques.textContent = `${cliques} / ${cliquesNecessarios}`;

  // Pulsar o coração ao clicar
  coracaoEntrada.style.transform = 'scale(1.3)';
  setTimeout(() => {
    coracaoEntrada.style.transform = 'scale(1)';
  }, 200);

  if (cliques >= cliquesNecessarios) {
    // Transição suave
    entrada.style.transition = 'opacity 0.8s ease';
    entrada.style.opacity = '0';
    setTimeout(() => {
      entrada.style.display = 'none';
      conteudo.style.display = 'block';
      conteudo.style.opacity = '0';
      conteudo.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        conteudo.style.opacity = '1';
      }, 50);
    }, 800);

    // Começar as animações dos corações e flores
    iniciarAnimacoesFundo();
  }
});

// Fundo com corações e flores flutuantes
const containerCoracoes = document.querySelector('.coracoes-fundo');
const containerFlores = document.querySelector('.flores-fundo');

function criarElementoAnimado(container, simbolo, cor, tamanhoMin=20, tamanhoMax=35, duracaoMin=7, duracaoMax=12) {
  const el = document.createElement('span');
  el.textContent = simbolo;

  el.style.left = Math.random() * 100 + 'vw';

  const tamanho = Math.random() * (tamanhoMax - tamanhoMin) + tamanhoMin;
  el.style.fontSize = tamanho + 'px';

  const duracao = Math.random() * (duracaoMax - duracaoMin) + duracaoMin;
  el.style.animationDuration = duracao + 's';

  if (Math.random() > 0.5) {
    el.style.animationDirection = 'normal';
  } else {
    el.style.animationDirection = 'reverse';
  }

  container.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, duracao * 1000);
}

let intervalCoracoesFlores;

function iniciarAnimacoesFundo() {
  intervalCoracoesFlores = setInterval(() => {
    criarElementoAnimado(containerCoracoes, '💖');
    criarElementoAnimado(containerFlores, '🌸', '#ff99bb', 22, 38, 8, 14);
  }, 450);
}
