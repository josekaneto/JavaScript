let aviao = {
    ligado: false,
    velocidade: 0,
    velocidadeMaxima: 800,
    passageiros: 1500,
    companhia: "Azul",
    cor: "Azul",

    Ligando : function(){
        this.ligado = true
        console.log("Ligando avião...")
    },
    Acelerando : function(){
        if(this.ligado && this.velocidade<this.velocidadeMaxima){
            this.velocidade += 10
            console.log("Acelerando..")
            console.log("velocidade atual " + this.velocidade)
        }
   
    },
    Decolando : function(){
        if(this.velocidade == 200){
            console.log("O aviao esta decolando")
        }
    },
    Cruzeiro : function(){
        if(this.velocidade >= 300 && this.velocidade < this.velocidadeMaxima){
            console.log("O aviao esta em cruzeiro")
        }
    },
    Desacelerando : function(){
        if(this.ligado && this.velocidade<=this.velocidadeMaxima){
            this.velocidade -= 10
            console.log("Desacelerando..")
            console.log("velocidade atual " + this.velocidade)
        }
   
    },
    Pousando : function(){
        if(this.velocidade > 0 && this.velocidade <= 200){
            console.log("O aviao esta pousando")
        }
    },
    Parado : function(){
        if(this.velocidade == 0){
            console.log("O avião esta parado")
        }
    },
    Desligando : function(){
        this.velocidade == 0 
        console.log("avião desligado")
    },



}

aviao.Ligando()

for(let i = 0; i < 80; i++){
    aviao.Acelerando()
    aviao.Cruzeiro()
    aviao.Decolando()
}
for(let i = 0; i < 80; i++){
    aviao.Desacelerando()
    aviao.Pousando()
}   


aviao.Parado()
aviao.Desligando()