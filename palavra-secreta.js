let palavras = ['ALURA', 'ORANCLE', 'HTML', 'JAVASCRIPT', 'CSS','PENSANDO'];
let letrasUsadas =[];
let letrasCorretas = [];
let palavraCorreta = '';
let tentativas = 0;
let sorteiaPalavra;

function palavraSecreta(palavras){
    sorteiaPalavra = palavras [Math.floor(Math.random()*palavras.length)];
    letrasSeparadas = sorteiaPalavra.split("");

    return letrasSeparadas;
}


function verificaLetras(key) {
    let re = new RegExp ("^[A-Z/s]+$");
    if (letrasCorretas.includes(key) || key.length > 1 || 
    letrasUsadas.includes(key) || !re.test (key)){
        return false;

    } else{
        return true;
    }
}

function letrasCorreta (i) {
    palavraCorreta += letrasSeparadas[i];
}

function letraIncorreta() {
    tentativas += 1;
   
    if (tentativas == 1){
        desenhaCabeça();
    }

    if (tentativas == 2){
        desenhaCorpo();
    }

    if (tentativas == 3){
        desenhaBracoEsquerdo();
    }

    if (tentativas == 4){
        desenhaBracoDireito();
    }

    if (tentativas == 5){
        desenhaPernaEsquerda();
    }

    if (tentativas == 6){
        desenhaPernaDireita();
        fimDeJogo();
    }

}

function fimDeJogo(){
    let botaoNovoJogo = document.querySelector("#botão-novo-jogo");
    botaoNovoJogo.style.display = "block";

    pincel.font = "bold 40px inter";
    pincel.fillStyle = "red";
    pincel.fillText("Você perdeu!" + letrasSeparadas, 450, 150);
}

function ganharJogo(){
    let botaoNovoJogo = document.querySelector("#botão-novo-jogo");
    botaoNovoJogo.style.display = "block";

    pincel.font = "bold 40px inter";
    pincel.fillStyle = 'green';
    pincel.fillText('Você acertou!', 500, 150);

}

document.addEventListener("keydown", function (evento){
    if (evento.target == inputPalavras) {return;}

    let teclas = evento.key;
    teclas = evento.key.toUpperCase();
    if(verificaLetras(teclas)) {

        for (let i = 0; i < letrasSeparadas.length; i++){
            if (letrasSeparadas [i] === teclas) {
                desenhaLetras(i);
               
                letrasCorretas.push(teclas.toUpperCase());
                if (letrasSeparadas.length === letrasCorretas.length){
                    ganharJogo();
                }
            }
        }

        if (!letrasSeparadas.includes(teclas) &&
        !letrasUsadas.includes(teclas)) {
            letrasUsadas.push(teclas.toUpperCase());
            letraIncorreta();
            desenhaLetraIncorreta(teclas, tentativas);
        }

    }
});

