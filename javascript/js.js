let opcao= ""

do{
    opcao = prompt("1. opção 1\n2. sair")

    switch (opcao){
        case "1":
            alert("opção 1")
            break;
        case "2":
            alert("saindo...")
            break;
        default:
            alert("Erro!")
            breack
    }
}while(opcao!=="2");