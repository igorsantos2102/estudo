let entradaDados = document.querySelector('#inputNomeCarro');
let btnAdicionarCarro = document.querySelector('#adicionarCarro');
let respostaUser = document.querySelector('#resposta');
let nomeCarro = [];


function verificar(){
    if(nomeCarro.indexOf(entradaDados.value) != -1 || entradaDados.value == ''){
        return true
    }
}


function adicionarCarro(){

    if(verificar() == true){
        respostaUser.innerHTML = 'Inserir um valor válido'
    }else{
        
        nomeCarro.push(entradaDados.value)
        respostaUser.innerHTML = `Voce adicionou o numero ${nomeCarro}`
        
    }
    
    entradaDados.focus()
    entradaDados.value = ''
}





