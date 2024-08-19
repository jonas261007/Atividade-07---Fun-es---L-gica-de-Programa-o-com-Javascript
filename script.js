// 5. Função "soma"
function soma(a, b) {
    return a + b;
}

// 6. Função "isPar"
function isPar(numero) {
    return numero % 2 === 0;
}

// 7. Função "media"
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// 8. Função "imc"
function imc(peso, altura) {
    return peso / (altura * altura);
}

// 9. Função "calcularDesconto"
function calcularDesconto(valor, percentualDesconto) {
    return valor - (valor * (percentualDesconto / 100));
}

// 10. Função "calcularImpostoRenda"
function calcularImpostoRenda(salarioBruto) {
    if (salarioBruto <= 1903.98) {
        return 0;
    } else if (salarioBruto <= 2826.65) {
        return salarioBruto * 0.075;
    } else if (salarioBruto <= 3751.05) {
        return salarioBruto * 0.15;
    } else if (salarioBruto <= 4664.68) {
        return salarioBruto * 0.225;
    } else {
        return salarioBruto * 0.275;
    }
}

// 11. Função "calcularMediaArredondada"
function calcularMediaArredondada(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return Math.round(soma / numeros.length);
}

// 12. Função "contarDigitosParesImpares"
function contarDigitosParesImpares(numero) {
    const digitos = numero.toString().split('');
    let pares = 0;
    let impares = 0;

    digitos.forEach(digito => {
        const num = parseInt(digito);
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    return { pares, impares };
}

// 13. Função "calcularMediaAlunos"
function calcularMediaAlunos(alunos) {
    const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return somaNotas / alunos.length;
}

// 14. Função "calcularIdade"
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// 15. Função "gerarTabuada"
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// 16. Função "advinheNumero"
function advinheNumero() {
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):") || "");
        tentativas++;
        
        if (tentativa === numeroCorreto) {
            alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            acertou = true;
        } else if (tentativa < numeroCorreto) {
            alert("O número correto é maior.");
        } else {
            alert("O número correto é menor.");
        }
    }
}

// 17. Função "verificarPropriedade"
function verificarPropriedade(objeto, propriedade) {
    return propriedade in objeto;
}

// 18. Função "calcularPrecoProduto"
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    const lucro = valorCusto * (margemLucro / 100);
    return valorCusto + lucro + valorFrete;
}

// 19. Função para encontrar a palavra mais longa
function palavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    let maisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > maisLonga.length) {
            maisLonga = palavra;
        }
    }

    return maisLonga;
}

// 20. Função para imprimir lista de strings em um quadro retangular
function imprimirEmQuadro(lista) {
    const largura = Math.max(...lista.map(str => str.length));
    const borda = '*'.repeat(largura + 4);

    console.log(borda);
    for (const item of lista) {
        console.log(`* ${item.padEnd(largura)} *`);
    }
    console.log(borda);
}

// 21. Função para filtrar strings com mais de 5 caracteres
function filtrarStringsLongas(strings) {
    return strings.filter(str => str.length > 5);
}

// 22. Função para filtrar livros por autor
function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}

// 23. Função para encontrar a pessoa mais velha
function encontrarPessoaMaisVelha(pessoas) {
    return pessoas.reduce((maisVelha, pessoa) => {
        return pessoa.idade > maisVelha.idade ? pessoa : maisVelha;
    }).nome;
}

// 24. Função para filtrar carros por ano
function filtrarCarrosPorAno(carros, ano) {
    return carros.filter(carro => carro.ano > ano);
}

// 25. Função "inverterString"
function inverterString(str) {
    return str.split('').reverse().join('');
}
