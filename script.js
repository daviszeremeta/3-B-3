const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A partir do ano de 2021, o Novo Ensino Médio foi integrado na maioria dos estados brasileiros. O que você pensou sobre isso na época?",
        alternativas: [
            {
                texto: "Achei interessante",
                afirmacao: "Acreditou que seria algo interessante para o Ensino Médio. "
            },
            {
                texto: "Achei horrível",
                afirmacao: "Acreditou que seria algo horrível para o Ensino Médio."
            }
        ]
    },
    {
        enunciado: "Com a chegada do Novo Ensino Médio, várias matérias novas foram surgindo. O que você acha dessas novas matérias?",
        alternativas: [
            {
                texto: "São importantes",
                afirmacao: "Afirmou que as matérias novas são importantes para o estudante."
            },
            {
                texto: "São inúteis",
                afirmacao: "Afirmou que as matérias novas são inúteis para o aprendizado do estudante."
            }
        ]
    },
    {
        enunciado: "Desde 2022, o Novo Ensino Médio possuí 6 aulas. Você acha isso bom ou ruim?",
        alternativas: [
            {
                texto: "Bom",
                afirmacao: "Acredita que 6 aulas são boas para os alunos."
            },
            {
                texto: "Ruim",
                afirmacao: "Acredita que 6 aulas são ruins para os alunos."
            }
        ]
    }, 
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua linha de pensamento:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
