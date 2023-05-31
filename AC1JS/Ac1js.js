class ProdutosNaturais{
    constructor(id, descricao, ativo, estoque, preco, peso, material){
        this.id = id
        this.descricao = descricao
        this.ativo = ativo
        this.estoque = estoque
        this.preco = preco
        this.peso = peso
        this.material = material
    }

    ativar(){
        this.ativo = true
    }

    retirarEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }  
            else if(valor == 0) {
                console.log("Impossível realizar valor zerado...")
            }
            else if(this.estoque < valor){
                console.log("estoque insuficiente...")
            }
            else{
                this.estoque = this.estoque - valor
            }
        }
        else{
            console.log("Conta está inaiva...")
        }
    }
    

    incluirEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar pedido estamos sem estoque...")
            }  
            else if(valor == 0) {
                console.log("Impossível realizar pedido estoque zerado...")
            }
            else{
                this.estoque = this.estoque + valor
            }
        }
        else{
            console.log("Conta está inaiva...")
        }
    }

}

const leia = require("prompt-sync")()

let tipo = ""
let valor = ""


console.log("Bem vindo ao Viva Verde\n")
console.log("Viva sua vida mais saudável\n")

tipo = leia("Deseja fazer uma compra S/N : ").toUpperCase()

while(tipo == "S"){
    
        console.log("Bem vindo ao Viva Verde\n")
        console.log("Viva sua vida mais saudável\n")

        console.log("Cadastro inicial do produto\n")

        let id = leia("Digite o Id do produto : ")
        let descricao = leia("Digite a descrião do produto : ")
        let preco = leia("Digite o preco do produto : ")
        let peso = leia("Digite o peso do produto : ")
        let material = leia("Digite de que material a embalagem do poduto é feita : ")

        let p1 = new ProdutosNaturais(id,descricao,false,10,preco,peso,material)

        console.log("Produto cadastrado!!!")

        p1.ativar()

        for(let i = 0; i <= 5; i++){

            console.log(p1)

            valor = parseInt(leia("quantos produtos você deseja comprar ? "))
        
            if( valor <= 0){
                valor = leia("Digitação incorreta. Quantos produtos você deseja comprar ? ")
            }

            p1.retirarEstoque(valor)

            console.log("Você vai pagar : "+(p1.preco*valor))
        
        }

        console.log(p1)

        valor = parseInt(leia("quantos produtos você deseja incluir no estque ? "))
        
        p1.incluirEstoque(valor)

        console.log(p1)


        tipo = leia("Deseja fazer uma compra S/N : ").toUpperCase()

}
console.log("Você sempre será bem vindo, volte sempre!")
