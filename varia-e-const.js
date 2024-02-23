// varíavel, seu valor pode ser alterado no decorrer do programa
/*let nomeestudante = "Helena"
console.log(nomeestudante)

// constante, seu valor não pode ser alterado
const nomedoestudante = "Helena"
console.log(nomedoestudante)

//Em outras linguagens, portanto, você encontrará algo semelhante a:
//String: nomeestudante = "Helena"*/

/*let listaDeEstudantes = ["helena", "chico", "Mário"]
let quantidadeDeEstudantes = listaDeEstudantes.length

listaDeEstudantes.push("josé")
console.log(listaDeEstudantes)*/

let listaDeEstudantes = ["Helena", "Chico", "mário","josé","Maria"]
let quantidadeDeEstudantes = listaDeEstudantes.length
if (quantidadeDeEstudantes < 5){
    listaDeEstudantes.push("joão")
    console.log(listaDeEstudantes)
} else{
    console.log("Não é possível inserir mais alunos nessa turma")
}
