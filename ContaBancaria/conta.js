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
        if(this.diaAniversarioPoupanca == dia){
            this.saldo = (this.saldo * 0.05) + this.saldo
            console.log("como hoje é aniversario da sua conta você recebeu uma correção na sua conta")
        }
        else{
            console.log("você não teve nenhuma correção")
        }
    }

}

class Corrente extends Conta{
    constructor(numero,cpf,saldo,ativo,contadorTalao){
       super(numero,cpf,saldo,ativo)
       this.contadorTalao = contadorTalao
    }
    
    pedirTalao(){
        let contadorTalao = 3
        let solicitarCheque = leia("Deseja solicitar talão? Digite S para sim e N para não: ").toUpperCase()
        if (solicitarCheque == "S"){
            if(this.saldo >= 30){
                let cheques = parseInt(leia("Digite a quantidade de cheques desejada (máximo 3): "));
                if (cheques >= 1 && cheques <= contadorTalao) {
                    let valorCheques = 30 * cheques
                    this.saldo = this.saldo - valorCheques
                    console.log("Você retirou "+cheques+" cheques da sua conta")
                }
                else {
                    console.log("Quantidade de cheques inválida. O número de cheques deve ser entre 1 e 3.");
                }
            }   
            else{
                console.log("Você não tem dinheiro suficiente para retirar talões de cheque")
            }
        }
        else{
            console.log("Você não deseja retirar nenhum cheque")
        }
    }
}

class Especial extends Conta{
    constructor(numero,cpf,saldo,ativo,limite){
        super(numero,cpf,saldo,ativo)
        this.limite = limite
     }

    usarLimite(){
        if(this.saldo < 0){
            this.limite = this.limite - this.saldo
        }
    }
}


const leia = require("prompt-sync")()

console.log("Bem vindo ao banco JTG"+"\n")
console.log("Do zero ao 1 milhão muito rápido e prático"+"\n")

console.log("Escolha uma conta para abrir"+"\n")

console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial"+"\n")

let tipo =""
tipo = leia("Digite o número do tipo de conta a ser aberta : "+"\n")

let op = ""

let valor = 0

if(tipo == "1"){
    console.log("CONTA POUPANÇA")

    let numero = parseInt(leia("digite o número da conta : "))
    let cpf =  leia("Digite o cpf : ")
    let diaAniversarioPoupanca = leia("Digite o aniversario da sua conta : ")
    let dia = leia("Digite a data de hoje para ver se é o aniversario da sua conta : ")
    let cp = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca,dia)

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

    let numero = parseInt(leia("digite o número da conta : "))

    let cpf = leia("Digite o cpf : ")

    let cc = new Corrente(numero,cpf,0,false,3)

    cc.ativar()

    for(let i=1; i<=10; i++){

    console.log("Movimento "+i)
    console.log("Saldo da conta : "+cc.saldo+" R$")
    valor = parseInt(leia("Digite o valor :"))
    op = leia("Digite D - débito ou C - crédito : ").toUpperCase()

        if(op == "C"){
            cc.credito(valor)

        }
        else if (op == "D"){
            cc.debito(valor)
        }
    }

    console.log("Saldo final da conta : "+cc.saldo+" R$")

    if(cc.saldo >= 30){
        cc.pedirTalao()
        console.log("Saldo final da conta : "+cc.saldo+" R$")
    }
    else{
        console.log("Você não possui saldo suficiente para pedir talões")
    }

}

else if(tipo == "3"){
    console.log("CONTA ESPECIAL")

        let numero = parseInt(leia("digite o número da conta : "))
        let cpf =  leia("Digite o cpf : ")
        let ce = new Especial(numero,cpf,0,false,1000)

        ce.ativar()

        for(let i=1; i<=10; i++){
            console.log("Movimento "+i)

            console.log("Saldo da conta : "+ce.saldo+" R$")

            valor = parseInt(leia("Digite o valor :"))

            op = leia("Digite D - débito ou C - crédito : ").toUpperCase()
        
                if(op == "C"){
                    ce.credito(valor)
                }
                else if (op == "D"){
                    ce.debito(valor)
                }
    }

    console.log("Saldo final da conta : "+ce.saldo+" R$")

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
