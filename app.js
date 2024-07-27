document.getElementById('entrada-texto').addEventListener('input', function(event) {
    // Remove caracteres que não são letras minúsculas ou espaços
    this.value = this.value.replace(/[^a-z\s]/g, '');
});

document.getElementById('botao-crip').addEventListener('click', criptografarTexto);
document.getElementById('botao-descrip').addEventListener('click', descriptografarTexto);
document.getElementById('botao-copiar').addEventListener('click', copiarTexto);
document.getElementById('tema').addEventListener('click', alternarTema);

function criptografarTexto() {
    let textoEntrada = document.getElementById('entrada-texto').value;
    let textoCriptografado = textoEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('saida-texto').value = textoCriptografado;
}

function descriptografarTexto() {
    let textoEntrada = document.getElementById('entrada-texto').value;
    let textoDescriptografado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('saida-texto').value = textoDescriptografado;
}

function copiarTexto() {
    let textoSaida = document.getElementById('saida-texto');
    textoSaida.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência');
}

function alternarTema() {
    document.body.classList.toggle('dark-mode');
}
