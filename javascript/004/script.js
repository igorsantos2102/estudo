let contador = document.getElementById('cont');
let add =  document.getElementById('add');
let remove = document.getElementById('remove');
let contagem = 0;


add.addEventListener('click', () => {
    contagem = contagem + 1;
    contador.innerText = contagem;
});

remove.addEventListener('click', () => {
    if(contagem == 0){
        contador.innerText = 'Numero menor que 0'
    }else{
        contagem = contagem - 1;
        contador.innerText = contagem;

    }
})



