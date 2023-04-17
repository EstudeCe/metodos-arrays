// Arrays e Objetos

// Array
// Lista de valores - index

const disciplinas = ["Matemática", "História", "Inglês"];

// Acessando os elementos da lista
const disciplina = disciplinas[1];

// Adicionar / Remover / Editar elementos em uma lista

// Método push
disciplinas.push("Educação física");

// Método unshift
disciplinas.unshift("Artes");

// Método pop
disciplinas.pop();

// Método shift
disciplinas.shift();

// Método map
const notas = [4, 8, 10, 6];

const notas2 = notas.map((value, index, array) => {
  const double = value * 2;

  return double;
});

const notas3 = notas.map((value) => value * 2);

// Método filter
const aprovados = notas.filter((value) => {
  return value >= 6;
});

// Objetos
// Par chave-valor

const garrafa = {
  tamanho: "500ml",
  cor: "preta",
  valor: 9,
  lojas: ["Loja A", "Loja B"],
};

// const tamanho = garrafa.tamanho;
// const cor = garrafa.cor;
// const valor = garrafa.valor;
// const lojas = garrafa.lojas;

garrafa.design = "azul";

// Desestruturação

const { valor, tamanho, lojas, cor } = garrafa;

// Condicionais - Operador ternário

const comprarGarrafa =
  valor < 10 ? "Vou comprar a garrafa" : "Não vou comprar a garrafa";

console.log(comprarGarrafa);

const tokens = [
  {
    id: 1,
    type: "color",
    category: "button",
    value: "#395bfc",
  },
  {
    id: 2,
    type: "font-size",
    category: "button",
    value: "16px",
  },
  {
    id: 3,
    type: "background",
    category: "button",
    value: "#159bfc",
  },
  {
    id: 4,
    type: "color",
    category: "container",
    value: "#395cba",
  },
  {
    id: 5,
    type: "font-size",
    category: "container",
    value: "16px",
  },
  {
    id: 6,
    type: "background",
    category: "container",
    value: "#159cba",
  },
  {
    id: 7,
    type: "color",
    category: "content",
    value: "#395dea",
  },
  {
    id: 8,
    type: "font-size",
    category: "content",
    value: "16px",
  },
  {
    id: 9,
    type: "background",
    category: "content",
    value: "#159dea",
  },
];

// 1 questão
// buttonTokens - Todos os tokens da category button

// 2 questão
// colorTokens - Todos os tokens do type color

// 3 questão
// contentTokens - Todos os tokens da category content

// Null e undefined
// Null - não existe
// Undefined - Existe mas não foi definido

// Falsy e Truthy
// Truthy - Todos os valores

// Falsy
// null
// undefined
// 0
// NaN
