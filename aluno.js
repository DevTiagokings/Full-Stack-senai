let aluno = 10

for (let index = 0; index <= aluno; index++){
    console.log(index)

    if(index == 0){
        console.log("o número atual é zero")
    }else if(index %2 == 0){
        console.log("O número é par")
    }else{
        console.log(`O número ${index} é impar`)
    }
}