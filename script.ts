// 5. Função "soma"
function soma(a: number, b: number): number {
    return a + b;
}

// // 6. Função "isPar"
// function isPar(numero: number): boolean {
//     return numero % 2 === 0;
// }

// // 7. Função "media"
// function media(nota1: number, nota2: number, nota3: number): number {
//     return (nota1 + nota2 + nota3) / 3;
// }

// // 8. Função "imc"
// function imc(peso: number, altura: number): number {
//     return peso / (altura * altura);
// }

// // 9. Função "calcularDesconto"
// function calcularDesconto(valor: number, percentualDesconto: number): number {
//     return valor - (valor * (percentualDesconto / 100));
// }

// // 10. Função "calcularImpostoRenda"
// function calcularImpostoRenda(salarioBruto: number): number {
//     if (salarioBruto <= 1903.98) {
//         return 0;
//     } else if (salarioBruto <= 2826.65) {
//         return salarioBruto * 0.075;
//     } else if (salarioBruto <= 3751.05) {
//         return salarioBruto * 0.15;
//     } else if (salarioBruto <= 4664.68) {
//         return salarioBruto * 0.225;
//     } else {
//         return salarioBruto * 0.275;
//     }
// }

// // 11. Função "calcularMediaArredondada"
// function calcularMediaArredondada(numeros: number[]): number {
//     const soma = numeros.reduce((acc, num) => acc + num, 0);
//     return Math.round(soma / numeros.length);
// }

// // 12. Função "contarDigitosParesImpares"
// function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
//     const digitos = numero.toString().split('');
//     let pares = 0;
//     let impares = 0;

//     digitos.forEach(digito => {
//         const num = parseInt(digito);
//         if (num % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//     });

//     return { pares, impares };
// }

// // 13. Função "calcularMediaAlunos"
// interface Aluno {
//     nome: string;
//     nota: number;
// }

// function calcularMediaAlunos(alunos: Aluno[]): number {
//     const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
//     return somaNotas / alunos.length;
// }

// // 14. Função "calcularIdade"
// function calcularIdade(anoNascimento: number): number {
//     const anoAtual = new Date().getFullYear();
//     return anoAtual - anoNascimento;
// }

// // 15. Função "gerarTabuada"
// function gerarTabuada(numero: number): void {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }

// // 16. Função "advinheNumero"
// function advinheNumero(): void {
//     const numeroCorreto = Math.floor(Math.random() * 100) + 1;
//     let tentativas = 0;
//     let acertou = false;

//     while (!acertou) {
//         const tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):") || "");
//         tentativas++;
        
//         if (tentativa === numeroCorreto) {
//             alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
//             acertou = true;
//         } else if (tentativa < numeroCorreto) {
//             alert("O número correto é maior.");
//         } else {
//             alert("O número correto é menor.");
//         }
//     }
// }

// // 17. Função "verificarPropriedade"
// function verificarPropriedade(objeto: object, propriedade: string): boolean {
//     return propriedade in objeto;
// }

// // 18. Função "calcularPrecoProduto"
// function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
//     const lucro = valorCusto * (margemLucro / 100);
//     return valorCusto + lucro + valorFrete;
// }

// // 19. Função para encontrar a palavra mais longa
// function palavraMaisLonga(frase: string): string {
//     const palavras = frase.split(' ');
//     let maisLonga = '';

//     for (const palavra of palavras) {
//         if (palavra.length > maisLonga.length) {
//             maisLonga = palavra;
//         }
//     }

//     return maisLonga;
// }

// // 20. Função para imprimir lista de strings em um quadro retangular
// function imprimirEmQuadro(lista: string[]): void {
//     const largura = Math.max(...lista.map(str => str.length));
//     const borda = '*'.repeat(largura + 4);

//     console.log(borda);
//     for (const item of lista) {
//         console.log(`* ${item.padEnd(largura)} *`);
//     }
//     console.log(borda);
// }

// // 21. Função para filtrar strings com mais de 5 caracteres
// function filtrarStringsLongas(strings: string[]): string[] {
//     return strings.filter(str => str.length > 5);
// }

// // 22. Função para filtrar livros por autor
// interface Livro {
//     titulo: string;
//     autor: string;
//     ano: number;
// }

// function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
//     return livros.filter(livro => livro.autor === autor);
// }

// // 23. Função para encontrar a pessoa mais velha
// interface Pessoa {
//     nome: string;
//     idade: number;
// }

// function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
//     return pessoas.reduce((maisVelha, pessoa) => {
//         return pessoa.idade > maisVelha.idade ? pessoa : maisVelha;
//     }).nome;
// }

// // 24. Função para filtrar carros por ano
// interface Carro {
//     marca: string;
//     modelo: string;
//     ano: number;
// }

// function filtrarCarrosPorAno(carros: Carro[], ano: number): Carro[] {
//     return carros.filter(carro => carro.ano > ano);
// }

// // 25. Função "inverterString"
// function inverterString(str: string): string {
//     return str.split('').reverse().join('');
// }
