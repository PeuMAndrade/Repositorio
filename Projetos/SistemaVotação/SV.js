//Parte 1
//Digite os nomes dos canditados
//Joga pra um Select
//
//
//Parte 2
//Votação
//Select 
//Aperta o botao de votar
//
//Parte 3
//Botao do resultado
//
//O canditado joao recebeu 10 votos e foi o mais votado

let c = 0    
function add(){
        
        let nome = document.querySelector('#space')
        if(Number.isInteger(Number(nome.value)) || nome.length == 0){
         alert(`voce digitou os dados incorretamente`)
        }else{
            if(c>=6){
                alert('Você excedeu o número máximo de pessoas')
                nome = null
            }
            nome = nome.value.toUpperCase()
            res.innerHTML += `${nome}<br>`
            limpar = document.querySelector('#space')
            limpar.value = ''
            c++
        }
    }