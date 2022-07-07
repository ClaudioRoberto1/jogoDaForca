let botaoIniciar = document.querySelector('#botão-inicia');

    botaoIniciar.addEventListener('click', function(evento){
    botaoIniciar.style.display = 'none';   
    botaoAdiciona.style.display = 'none'; 
    botaoAdd.style.display = 'none';
    inputPalavras.style.display = 'none';  
     
    desenhaTraco(palavraSecreta(palavras));
});

let botaoNovoJogo = document.querySelector('#botão-novo-jogo');

botaoNovoJogo.addEventListener('click', function(evento){
    botaoNovoJogo.style.display = 'none';   
    botaoAdiciona.style.display = 'none'; 
    pincel.clearRect(0,0,1200,800);
    tentativas = 0;
    letrasUsadas = [];
    letrasCorretas = [];
    palavraCorreta = '';
     
    desenhaTraco(palavraSecreta(palavras));
});

let botaoAdd = document.querySelector('#botão-adiciona');
let botaoAdiciona = document.querySelector('#adiciona-palavra');
let inputPalavras = document.querySelector('#nova-palavra');
botaoAdd.addEventListener('click', function (evento){

    botaoNovoJogo.style.display = 'none';   
    botaoAdd.style.display = 'none';
    botaoAdiciona.style.display = 'block'; 
    inputPalavras.style.display = 'block';  
    tela.style.display = 'none';
     
});

botaoAdiciona.addEventListener('click', function(evento){

    let inputPalavras = document.querySelector('#nova-palavra');

    if (inputPalavras.value !== '' ) {

        palavras.push(inputPalavras.value.toUpperCase());

       alert('Palavra adicionada com sucesso!');

}else{
    alert('Escreva uma palavra válida!');

}
console.log(palavras);
});
