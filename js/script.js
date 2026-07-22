/*
    1. pega valor informado
    2. pegar categoria informada
    3. impedir numeros negativos
    4. Atualizar o valor de acordo com a categoria
        4.1 Criar variaveis para armanezar ou controlar os valores de cada categoria
    5. Atualizar inferface
    6. Limpar Inputs
*/ 


const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0]
]

// Funções Utilirias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somarValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");

// Obter Valores do Formulario
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

// Obter Categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valor Matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somarValor(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })
}



function adicionarGasto() {

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert("Valor Inválido. O valor não pode ser negativo.")
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);

    atualizarInterface();
    limparCampos();
}