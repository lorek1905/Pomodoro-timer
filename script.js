const pause = document.getElementById('pause');
const pomodoro = document.getElementById('pomodoro');
const descanso = document.getElementById('descanso');
let tempo =  1500; // 25 minutos em milissegundos
let intervalo;

function formatacaoTimer() {
    //funcao que atualiza o temporizador e o mantem no formato correto.
    const temporizador = document.querySelector('.temporizador');

    let minutos = Math.floor(tempo / 60); 
    //math.floor arredonda para baixo, ou seja, 24.9999 vira 24, aqui criamos a variavel minutos e dividimos o tempo por 60 para obter o número de minutos restantes. O resultado é arredondado para baixo usando Math.floor, garantindo que obtenhamos um valor inteiro de minutos.

    let segundos = tempo % 60;
    //aqui criamos a variavel segundos e usamos o operador de módulo (%) para obter o número de segundos restantes. O operador de módulo retorna o restante da divisão de tempo por 60, que representa os segundos que não formam um minuto completo.

     temporizador.textContent = 
        `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`; 
    //aqui atualizamos o conteúdo de texto do elemento temporizador para exibir o tempo restante no formato "MM:SS". Usamos String(minutos).padStart(2, '0') para garantir que os minutos sejam exibidos com dois dígitos, preenchendo com zeros à esquerda se necessário. O mesmo é feito para os segundos. Além disso, usamos o '${...}' para interpolar as variáveis minutos e segundos dentro da string, criando a formatação desejada.
}

function iniciarContagem() {
    if (intervalo) return; //aqui verificamos se o intervalo já está definido. Se intervalo tiver um valor (ou seja, se a contagem já estiver em andamento), a função retorna imediatamente, impedindo que uma nova contagem seja iniciada. Isso evita que múltiplos intervalos sejam criados e causem problemas de sincronização no temporizador.

        intervalo = setInterval(() => {
            tempo--;
            formatacaoTimer();
        }, 1000);
    //aqui criamos a função iniciarContagem, que é responsável por iniciar a contagem regressiva do temporizador. Dentro dessa função, usamos setInterval para executar uma função a cada 1000 milissegundos (1 segundo). A função dentro do setInterval decrementa o valor de tempo em 1 (tempo--) e chama a função formatacaoTimer() para atualizar o display do temporizador com o novo valor de tempo. Isso faz com que o temporizador seja atualizado a cada segundo, mostrando a contagem regressiva corretamente.
}

function resetarContagem() {
    tempo = 1500;
    iniciarContagem();
}

function pausarContagem() {
    clearInterval(intervalo);
    intervalo = null;
}

function selecionarTempo(tipo) {
    if (tipo === 'pomodoro') {
        tempo += 300; // 5 minutos em segundos
    } else if (tipo === 'descanso') {
        tempo = 300; // 5 minutos em segundos
    }
}


    iniciarContagem();