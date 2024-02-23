// Se a peça possuir 100g, pode cadastrar
let peso = 50

if(peso < 100){
    console.log("A peça precisa pesar no mínimo 100g")
}else{
    console.log("A peça pode ser cadastrada")
}

//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente
let lista = ["Amortecedor", "disco de freio", "motor"]

if( lista.length < 10){
    console.log("É possível cadastar mais peças")
}else{
    console.log("Não tem mais espaços na lista")
}

//caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro
let nome = "Motor"
if (nome.length > 3){
    console.log("Nome válido")
}else{
    console.log("Colocar um nome válido")
}