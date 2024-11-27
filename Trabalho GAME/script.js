const gameContainer = document.getElementById('container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('temporizador');
const gameOverScreen = document.getElementById('fim-jogo');
const finalScoreDisplay = document.getElementById('final-score');

let score = 0;
let timeLeft = 30;
let interval;

// Função para criar bolas em posições aleatórias dentro do contêiner
function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    
    // Posicionamento aleatório dentro do contêiner
    const x = Math.random() * (gameContainer.offsetWidth - 50);
    const y = Math.random() * (gameContainer.offsetHeight - 50);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    // Evento de clique na bola
    ball.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = `Pontos: ${score}`;
        gameContainer.removeChild(ball);
        createBall();
    });

    gameContainer.appendChild(ball);
}

// Função para iniciar o jogo
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Pontos: ${score}`;
    timerDisplay.textContent = `Tempo: ${timeLeft}s`;
    gameOverScreen.style.display = 'none';

    // Criar bolas iniciais
    for (let i = 0; i < 8; i++) {
        createBall();
    }

    // Atualizar o tempo
    interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tempo: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Função para terminar o jogo
function endGame() {
    clearInterval(interval);
    gameOverScreen.style.display = 'block';
    finalScoreDisplay.textContent = score;

    // Remover todas as bolas
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.remove());
}

// Iniciar o jogo automaticamente
startGame();