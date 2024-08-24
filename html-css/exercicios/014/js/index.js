const aceitou = document.getElementById('sim');
const negou = document.getElementById('nao');



aceitou.addEventListener('click', function() {
    // Obtém o elemento de áudio e o contêiner de textos animados
    const audio = document.getElementById('background-audio');
    const animatedTexts = document.querySelector('.hidden');
    
    // Reproduz o áudio
    audio.play();
    
    // Torna os textos visíveis e inicia a animação
    animatedTexts.classList.remove('hidden');
});


// Evento para mover o botão para posições aleatórias ao passar o mouse por cima
negou.addEventListener('mouseover', () => {
    negou.style.position = 'absolute';

    // Calcula valores aleatórios para top e left
    const randomTop = Math.random() * 90; // Limite de 90% para evitar sair da tela
    const randomLeft = Math.random() * 90; // Limite de 90% para evitar sair da tela

    // Define as novas posições do botão
    negou.style.top = `${randomTop}%`;
    negou.style.left = `${randomLeft}%`;
});
