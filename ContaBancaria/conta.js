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
    constructor(numero,cpf,saldo,ativo,dataHoje,diaAniversarioPoupanca){
        super(numero,cpf,saldo,ativo)
        this.dataHoje = dataHoje
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }


    correcao(){
        if(this.dataHoje == this.diaAniversarioPoupanca){
            this.saldo = (this.saldo * 0.05) + this.saldo
            console.log("como hoje é aniversario da sua conta você recebeu uma correção na sua conta")
        }
        else{
            console.log("você não teve nenhuma correção")
        }
    }

}


const leia = require("prompt-sync")()

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
    let dataHoje = leia("Digite a data de hoje para ver se é o aniversario da sua conta : ")
    //let c1 = new Conta(numero,cpf,0,false)
    let c2 = new Poupanca(numero,cpf,0,false,dataHoje,diaAniversarioPoupanca)

    c2.ativar()

    for(let i=1; i<=10; i++){
     console.log("Movimento "+i)

     console.log("Saldo da conta : "+c2.saldo+" R$")

     valor = parseInt(leia("Digite o valor :"))

     op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
    
     if(op == "C"){
         c2.credito(valor)
     }
     else if (op == "D"){
         c2.debito(valor)
     }
   
    }

    //console.log("Saldo final da conta : "+c2.saldo+" R$")

    console.log(c2.correcao())
    console.log("Saldo final da conta : "+c2.saldo+" R$")
    



    //if(dataHoje == diaAniversarioPoupanca){
       // c2.saldo = (c2.saldo * 0.05) + c2.saldo
        //console.log("como hoje é aniversario da sua conta você recebeu uma correção na sua conta")
        //console.log("Saldo final da conta : "+c2.saldo+" R$")
    //}
    //else{
        //console.log("você não teve nenhuma correção")
       // console.log("Saldo final da conta : "+c2.saldo+" R$")
   // }

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
