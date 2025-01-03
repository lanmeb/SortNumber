function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //ler inf. da tela document.getElementById().value
    //alert(`Quantidade: ${quantidade}`);
    //alert(`Do número: ${de}`);
    //alert(`Até o número: ${ate}`);
    //para ver o resultado na tela
    //let numero = obterNumeroAleatorio(de, ate);
    //alert(numero);



    //alerta para que o usuário reveja se inseriu os dados corretamente.
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    //verificar a situação que desejamos evitar. Se positivo, iremos também interromper 
    // a função sortear(). 
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
/*Veja que utilizamos dentro do bloco if o comando return. Esse comando, usado dentro desse
bloco e sem de fato retornar nada, serve para que a função sortear() seja interrompida nesse
ponto, sem seguir para as linhas de baixo. Isso é muito útil quando você não quer que o 
código adicional seja executado dada alguma circunstância específica. Nesse caso, por exemplo,
se o usuário informou erroneamente os valores, não faz sentido continuar com o sorteio.*/

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        } 
        sorteados.push(numero);
    }//
/*sorteados é a nossa variável array, e todo 
array no JavaScript tem essa função chamada includes(),
que devolve um booleano: true (verdadeiro) ou false (falso).
O que esse while() está dizendo é: "enquanto a variável 
sorteados tem incluído esse numero". Enquanto for true,
vamos entrar no nosso loop e pedir 
para ele fazer um novo sorteio.Para não repetir numero 
dentro do while(), chamamos novamente o numero recebendo
o obterNumeroAleatorio(de, ate);. E ele ficará fazendo
esse loop até que todos os números sejam exclusivos.*/

        

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;//crase
    alterarStatusBotao(); //botao reiniciar estava desabilitado, criar funcao para ter as mesmas propriedades do outro botao
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
//funçao para obter numero aleatorio, inclusive o ultimo
}
//o botao Reiniciar fica inativo ate a pessoa neiniciar o jogo
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}
// para limpar os numeros na pagina
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

