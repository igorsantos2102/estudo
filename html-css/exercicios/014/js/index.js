const aceitou = document.getElementById('sim');
const negou = document.getElementById('nao');



aceitou.addEventListener('click', function() {
   
    const audio = document.getElementById('background-audio');
    const animatedTexts = document.querySelector('.hidden');
  
    audio.play();
    

    animatedTexts.classList.remove('hidden');
});



negou.addEventListener('mouseover', () => {
    negou.style.position = 'absolute';

    // Calcula valores aleatórios para top e left
    const randomTop = Math.random() * 90; 
    const randomLeft = Math.random() * 90; 

    negou.style.top = `${randomTop}%`;
    negou.style.left = `${randomLeft}%`;
});
