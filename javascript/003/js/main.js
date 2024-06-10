function calcular(){
    
    let ano_nasc = document.querySelector('#nsc').value;
    let res = document.querySelector('#res');
    let img = document.querySelector('#img');
    let image = document.querySelector('#image');
    let sexo = document.getElementsByName('sexo');
    let genero = '';
    let data = new Date();
    let ano = data.getFullYear();

    if(ano_nasc == '' || ano_nasc > ano){
        alert('[ERRO] Dados inválidos !!')

    }else{
        
        idade = ano - ano_nasc ;

        
        if(sexo[0].checked){
            genero = 'homem'
        }else{
            genero = 'mulher'
        }

        lista_imagens = [ 

            ['./img/0-10_mulher.jpg', './img/11-16_mulher.jpg', './img/17-25_mulher.jpg', './img/26-35_mulher.jpg', './img/36-55_mulher.jpg', './img/56-65_mulher.jpg', './img/66_mulher.jpg'],
            ['./img/0-10_homen.jpg','./img/11-16_homen.jpg', './img/17-25_homen.jpg', './img/26-35_homen.jpg', './img/36-55_homen.jpg', './img/56-65_homen.jpg', './img/66_homen.jpg']
        ]
        
       

        if(genero == 'homem'){


            img.classList.add('img');

            if(idade > 66){
                
                image.src = lista_imagens[1]

            }

        }else{
            img.classList.add('img');
            image.src = lista_imagens[1]
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos`;
    }
    
    
    
}
