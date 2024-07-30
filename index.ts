// 1. Descreva para que serve o comando "for".
// O comando for em programação é utilizado para repetir um bloco de código um número determinado de vezes. É muito útil para iterar sobre sequências de números, coleções ou para executar um conjunto de instruções repetidamente até que uma condição seja satisfeita.

// 2. Como o comando "for" define o início de uma repetição?
// O comando for define o início de uma repetição através da inicialização de uma variável de controle. Esse valor inicial é definido na primeira parte da estrutura do for.

// 3. Como o comando "for" determina o fim da execução?
// O comando for determina o fim da execução através de uma condição de término, especificada na segunda parte da estrutura do for. Quando essa condição não é mais satisfeita, o loop é interrompido.

// 4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// A alteração do valor em cada repetição dentro da estrutura de repetição for ocorre na terceira parte da estrutura do for, onde é especificado como a variável de controle deve ser atualizada após cada iteração.

// Questão 5: Código do slide de número 18
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Questão 6: Código do slide de número 26
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Questão 7: Código do slide de número 36
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}

// Questão 8: Código do slide de número 38
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum is: ${sum}`);

// Questão 9: Código do slide de número 44
let product = 1;
for (let i = 1; i <= 5; i++) {
    product *= i;
}
console.log(`Product is: ${product}`);

// Questão 10: Exibir números de 1 a 10 em ordem crescente
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Questão 11: Exibir números de 10 a 1 em ordem decrescente
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Questão 12: Calcular a soma dos números de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(`Soma dos números de 1 a 100: ${soma}`);

// Questão 13: Exibir todos os números pares de 1 a 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Questão 14: Calcular o produto dos números de 1 a 5
let produto = 1;
for (let i = 1; i <= 5; i++) {
    produto *= i;
}
console.log(`Produto dos números de 1 a 5: ${produto}`);

// Questão 15: Exibir a tabuada do 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Questão 16: Calcular a média de 5 notas digitadas pelo usuário
let totalNotas = 0;
for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}:`) || "0");
    totalNotas += nota;
}
let media = totalNotas / 5;
console.log(`Média das 5 notas: ${media}`);

// Questão 17: Exibir todos os múltiplos de 3 no intervalo de 1 a 50
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Questão 18: Ler 10 números do usuário e exibir o maior e o menor valor digitado
let numeros: number[] = [];
for (let i = 1; i <= 10; i++) {
    let num = parseFloat(prompt(`Digite o número ${i}:`) || "0");
    numeros.push(num);
}
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);
console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);

// Questão 19: Exibir os números ímpares de 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Questão 20: Ler 5 notas de alunos e exibir quantos foram aprovados (nota ≥ 7)
let aprovados = 0;
for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}:`) || "0");
    if (nota >= 7) {
        aprovados++;
    }
}
console.log(`Número de alunos aprovados: ${aprovados}`);

// Questão 21: Exibir a soma dos dígitos de um número inteiro fornecido pelo usuário
let numero = parseInt(prompt("Digite um número inteiro:") || "0");
let somaDigitos = 0;
while (numero) {
    somaDigitos += numero % 10;
    numero = Math.floor(numero / 10);
}
console.log(`Soma dos dígitos: ${somaDigitos}`);

// Questão 22: Ler um número inteiro e exibir todos os seus divisores
let numeroDiv = parseInt(prompt("Digite um número inteiro:") || "0");
console.log(`Divisores de ${numeroDiv}:`);
for (let i = 1; i <= numeroDiv; i++) {
    if (numeroDiv % i === 0) {
        console.log(i);
    }
}

// Questão 23: Calcular a média de altura de 5 pessoas
let totalAltura = 0;
for (let i = 1; i <= 5; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i}:`) || "0");
    totalAltura += altura;
}
let mediaAltura = totalAltura / 5;
console.log(`Média de altura: ${mediaAltura}`);

// Questão 24: Exibir os números de 1 a 100, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz"
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

// Questão 25: Ler um número inteiro e exibir a soma dos dígitos pares desse número
let numPares = parseInt(prompt("Digite um número inteiro:") || "0");
let somaPares = 0;
while (numPares) {
    let digito = numPares % 10;
    if (digito % 2 === 0) {
        somaPares += digito;
    }
    numPares = Math.floor(numPares / 10);
}
console.log(`Soma dos dígitos pares: ${somaPares}`);

// Questão 26: Ler um número inteiro e exibir o número invertido
let numInverter = parseInt(prompt("Digite um número inteiro:") || "0");
let numInvertido = 0;
while (numInverter) {
    numInvertido = numInvertido * 10 + (numInverter % 10);
    numInverter = Math.floor(numInverter / 10);
}
console.log(`Número invertido: ${numInvertido}`);
