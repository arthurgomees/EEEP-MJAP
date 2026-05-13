let opcao= ""
let sair= ""

do{
    opcao = prompt("Seja bem vinda/o! Escolha seu prato de hoje:\n1. pistache \n2. morango do amor \n3. Carne de gaivota \n4. feijão com farinha")

    switch (opcao){
        case "1":
            alert("Boa escolha!")
            sair = prompt("1. Continuar pedindo \n2. Sair")
            break;
        case "2":
            alert("Boa escolha!")
            sair = prompt("1. Continuar pedindo \n2. Sair")
            break;
        case "3":
            alert("Boa escolha!")
            sair = prompt("1. Continuar pedindo \n2. Sair")
            break;
        case "4":
            alert("Boa escolha!")
            sair = prompt("1. Continuar pedindo \n2. Sair")
            break;
        default:
            alert("Erro!")
            breck;
    }
}while( sair!== "2")