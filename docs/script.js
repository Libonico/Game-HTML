const gameContainer = document.getElementById('container');
const mostrarScore = document.getElementById('score');
const mostrarTempo = document.getElementById('temporizador');
const gameOver = document.getElementById('fim-jogo');
const pontuacaoFinal = document.getElementById('final-score');
let score = 0;
let tempoRestante = 30;
let attTempo;


function criarBola() {
    const bola = document.createElement('div');
    bola.classList.add('bola');

    const x = Math.random() * (gameContainer.offsetWidth - 50);
    const y = Math.random() * (gameContainer.offsetHeight - 50);
    bola.style.left = `${x}px`;
    bola.style.top = `${y}px`;
    bola.addEventListener('click', () => {
        score += 10;
        mostrarScore.textContent = `Pontos: ${score}`;
        gameContainer.removeChild(bola);
        criarBola();
    });
    gameContainer.appendChild(bola);
}

function comecarJogo() {
    score = 0;
    tempoRestante = 30;
    mostrarScore.textContent = `Pontos: ${score}`;
    mostrarTempo.textContent = `Tempo: ${tempoRestante}s`;
    gameOver.style.display = 'none';
    for (let i = 0; i < 8; i++) {
        criarBola();
    }
    attTempo = setInterval(() => {
        tempoRestante--;
        mostrarTempo.textContent = `Tempo: ${tempoRestante}s`;
        if (tempoRestante <= 0) {
            fimJogo();
        }
    }, 1000);
}

function fimJogo() {
    clearInterval(attTempo);
    gameOver.style.display = 'block';
    pontuacaoFinal.textContent = score;
    const bolas = document.querySelectorAll('.bola');
    bolas.forEach(bola => bola.remove());
}