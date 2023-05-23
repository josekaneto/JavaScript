class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero
        this.cpf = cpf
        this.saldo = saldo
        this.ativo = ativo
    }

    ativar(){
        this.ativo = true
    }

    credito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }  
            else if(valor == 0) {
                console.log("Impossível realizar valor zerado...")
            }
            else{
                this.saldo = this.saldo + valor
            }
        }
        else{
            console.log("Conta está inaiva...")
        }
      
    }

    debito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }  
            else if(valor == 0) {
                console.log("Impossível realizar valor zerado...")
            }
            else if(this.saldo < valor){
                console.log("Saldo insuficiente...")
            }
            else{
                this.saldo = this.saldo - valor
            }
        }
        else{
            console.log("Conta está inaiva...")
        }
    }
}

class Poupanca extends Conta{
    constructor(numero,cpf,saldo,ativo,diaAniversarioPoupanca){
        super(numero,cpf,saldo,ativo)
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }


    correcao(dia){
        if(dia == this.diaAniversarioPoupanca){
            this.saldo = (this.saldo * 0.05) + this.saldo
            console.log("como hoje é aniversario da sua conta você recebeu uma correção na sua conta")
        }
        else{
            console.log("você não teve nenhuma correção")
        }
    }

}

class Conrrente extends Conta{
    constructor(numero,cpf,saldo,ativo,contadorTalao){
        super(numero,cpf,saldo,ativo)
        this.contadorTalao = contadorTalao
    }

    pedirTalao(quantidadeTalao){
        if(quantidadeTalao == "1"){
             op
        }
    }

}


const leia = require("prompt-sync")()

console.log("Bem vindo ao banco JTG")
console.log(" ")

console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial")

let tipo =""
tipo = leia("Digite o número do tipo de conta a ser aberta : ")

let op = ""
let valor = 0

if(tipo == "1"){
    console.log("CONTA POUPANÇA")

    let numero = parseInt(leia("digite o número da conta : "))
    let cpf =  leia("Digite o cpf : ")
    let diaAniversarioPoupanca = leia("Digite o aniversario da sua conta : ")
    let dia = leia("Digite a data de hoje para ver se é o aniversario da sua conta : ")
    let cp = new Poupanca(numero,cpf,0,false,dataHoje,diaAniversarioPoupanca)

    cp.ativar()

    for(let i=1; i<=10; i++){
     console.log("Movimento "+i)

     console.log("Saldo da conta : "+cp.saldo+" R$")

     valor = parseInt(leia("Digite o valor :"))

     op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
    
     if(op == "C"){
         cp.credito(valor)
     }
     else if (op == "D"){
         cp.debito(valor)
     }
   
    }

    cp.correcao(dia)
    console.log("Saldo final da conta : "+cp.saldo+" R$")
    
}

else if(tipo == "2"){
    console.log("CONTA CORRENTE")




}

else if(tipo == "3"){
    console.log("CONTA ESPECIAL")


}

// let numero = parseInt(leia("digite o número da conta : "))
// let cpf =  leia("Digite o cpf : ")
// let c1 = new Conta(numero,cpf,0,false)

// c1.ativar()

// for(let i=1; i<=10; i++){
    // console.log("Movimento "+i)

    // console.log("Saldo da conta : "+c1.saldo+" R$")

    // valor = parseInt(leia("Digite o valor :"))

    // op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
    
     //if(op == "C"){
        // c1.credito(valor)
     //}
     //else if (op == "D"){
        // c1.debito(valor)
    // }
   
// }


 //console.log("Saldo final da conta : "+c1.saldo+" R$")
