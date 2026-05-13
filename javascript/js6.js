const vetor = [12, 45, 7, 89, 23, 150, 3, 67];

let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}

console.log("O maior número do vetor é:", maior);