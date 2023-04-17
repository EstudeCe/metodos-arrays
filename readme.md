## Array

Um array é uma lista ordenada através de um index, e pode receber qualquer tipo de valor.

```
const disciplinas = [ "Matemática", "História", "Inglês" ]
```

**Acessando os elementos da lista**

Os elementos de uma lista podem ser acessados através do index. O valor do index vai de 0 para o primeiro elemento, até o comprimento da lista - 1 para o último elemento. Podemos acessar um valor da lista utilizando o seu index.

```
console.log(disciplinas[0])
// Matemática
```

**Alterando os elementos na lista**

Para realizar métodos de manipulação em um array, e esses métodos de manipulação são utilizados para realizar manipulações, do tipo de adição, remoção, e vários outros tipos de manipulação.
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_Collections)

**Método push**

O método push é responsável por adicionar um elemento no final de um array.

```
disciplinas.push('Educação física')
console.log(disciplinas)
// "Matemática", "História", "Inglês", "Educação física"
```

**Método unshift**

O método unshift adicionar um elemento no inicio de um array.

```
disciplinas.unshift('Artes')
console.log(disciplinas)
// "Artes", "Matemática", "História", "Inglês", "Educação física"
```

**Método pop**

O método pop remove o último elemento de um array.

```
disciplinas.pop()
console.log(disciplinas)
// "Artes", "Matemática", "História", "Inglês"
```

**Método shift**

O método shift remove o primeiro elemento de um array.

```
disciplinas.shift()
console.log(disciplinas)
// "Matemática", "História", "Inglês"
```

**Alterando elementos da lista pelo index**

Podemos alterar elemento de uma lista através do index que vamos utilizar

```
disciplinas[0] = "Português"
console.log(disciplinas)
// "Português", "História", "Inglês"
```

**Método map**

Este método percorre um array implementando alguma funcionalidade, e possui um retorno implícito.

```
const notas = [2, 4, 6, 8];

const notas2 = notas.map((nota) => nota * 2);
// [ 4, 10 ,24 , 32]
```

Também podemos utilizar o método map com o retorno explicito, caso seja necessário.

```
const notas2 = notas.map((nota) => {
  const double = nota * 2;

  return double;
});
// [ 4, 10 ,24 , 32]
```

**Método filter**

Este método aplica um filtro no array, e retorna apenas os elementos que vão retornar true para a operação lógica.

```
const notas = [2, 4, 6, 8];

const notas2 = notas.filter((nota) => nota > 4);
// [ 6, 8 ]
```

## Homework

Para o desenvolvimento, utilize o mock de tokens dentro do arquivo `mock.js`.

#### 01

Retorne um array chamado buttonTokens, contendo todos os tokens da category button.

#### 02

Retorne um array chamado colorTokens, contendo todos os tokens do type color.

#### 03

Retorne um array chamado contentTokens, contentos todos os tokens do category content. Porém, você vai alterar os objetos e retornar sem o id, e sem o category.
