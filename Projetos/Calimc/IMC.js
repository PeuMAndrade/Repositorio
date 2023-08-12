
function calcular(){
    let pesotxt = document.querySelector('#peso')
    let alturatxt = document.querySelector('#altura')
    let peso = Number(pesotxt.value)
    let altura = Number(alturatxt.value.replace(",","."))
    let imc = 0
        if(peso == 0 || altura == 0 || altura > 2.5){
            alert(`Você não informou todos os dados`)
        } else{
            imc = peso/(altura**2)
            if(isNaN(imc)){
                alert(`Você não informou todos os dados ou informou incorretamente`)
            } else{
            res.innerHTML = ''
            res.innerHTML += `<br>IMC= ${imc.toFixed(1)}<br>`
            if(imc < 18.5){
                res.innerHTML += `BAIXO PESO <br>`
            } else if(imc >= 18.5 || imc < 24.99){
                res.innerHTML += `NORMAL <br>`
            } else if(imc >= 25 || imc < 29.99){
                res.innerHTML += `SOBREPESO <br>`
            } else if(imc >= 30){
                res.innerHTML += `OBESIDADE <br>`
    }}
}
}
