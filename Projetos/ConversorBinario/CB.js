 function toDecimal(valorBinario){
    let decimal = 0
    for(let c = valorBinario.length -1, expoente = 0; c >= 0; c--, expoente++) {
        decimal += valorBinario[c] * (2**expoente)
    } return decimal
}

function toBinario(valorDecimal){
    let binario = []
    if(valorDecimal == 0){
        binario.unshift(0)
        return binario
    }
    while(valorDecimal > 0){
        if(valorDecimal%2 == 1){
            valorDecimal -= 1
            valorDecimal /= 2
            binario.unshift(1)
        }else{
            valorDecimal /= 2
            binario.unshift(0)
                }
            } return binario.toString().replaceAll(',','')}

function click1(){
    let txtnumero = document.querySelector('#space')
    let numero = Number(txtnumero.value)
    res.style.display = 'block'
    res.innerHTML = toDecimal(`${numero.toString()}`)
}
function click2(){
    let txtnumero = document.querySelector('#space')
    let numero = Number(txtnumero.value)
    toBinario(numero)
    res.style.display = 'block'
    res.innerHTML = toBinario(numero)
}