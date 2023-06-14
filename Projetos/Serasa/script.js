function exibirNome() {
    var nome = document.getElementById("nome").value; // Obter o valor do input
    document.getElementById("nome-exibido").innerHTML = `Nome: ${nome}`; // Exibir o nome na div
}