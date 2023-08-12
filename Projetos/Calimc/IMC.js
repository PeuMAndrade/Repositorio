function calcular(){
    let pesotxt = document.querySelector('#peso')
    let alturatxt = document.querySelector('#altura')
    let peso = Number(pesotxt.value)
    let altura = Number(alturatxt.value)
        if(peso == 0 || altura == 0){
            alert(`Você não informou todos os dados`)
        } else{
            let imc = peso/(altura**2)
            let = imc
            res.innerHTML = `IMC: ${imc.toFixed(1)}<br>`
            if(imc < 18.5){
                res.innerHTML += `BAIXO PESO`
            } else if(imc >= 18.5 || imc < 24.99){
                res.innerHTML += `NORMAL`
            } else if(imc >= 25 || imc < 29.99){
                res.innerHTML += `SOBREPESO`
            } else if(imc >= 30){
                res.innerHTML += `OBESIDADE`
    }
}
}
