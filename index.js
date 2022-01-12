// Criando a classe Cliente
class Cliente {
    nome;
    cpf;
}

// Registrando um novo objeto Cliente 
const cliente1 = new Cliente();
const cliente2 = new Cliente();

// Populando os atributos do objeto Cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// Populando os atributos do objeto Cliente2
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// Imprimindo os atrubutos dos objetos da classe Cliente 
console.log("\n==================================================================================");
console.log("------------------------------- Byte Bank ----------------------------------------");
console.log("==================================================================================");
console.log("\n");
console.log(cliente1);
console.log(cliente2);

// Criando a classe ContaCorrente
class ContaCorrente {
    agencia;
    /* #saldo = 0; */
    _saldo = 0;


    depositar(deposito) {
        if (deposito <= 0) {
            console.log("\nDepósito inválido! Valor de depósito negativo.");
            console.log("****************************************************************** ");
            return deposito;
        }

        this._saldo = this._saldo + deposito;
        console.log("\nDepósito realizado: " + deposito.toFixed(2));
        console.log("Saldo atual: " + (this._saldo).toFixed(2));

        carteira = carteira - deposito;
        console.log("CARTEIRA: " + carteira.toFixed(2));
        console.log("****************************************************************** ");
    }

    sacar(saque) {
        if (this._saldo < saque) {
            console.log("\nSaque não liberado! Você não tem saldo suficientes.");
            console.log("****************************************************************** ");

            return saque;
        }

        this._saldo = this._saldo - saque;
        console.log("\nSaque realizado: " + saque.toFixed(2));
        console.log("Saldo atual: " + (this._saldo).toFixed(2));

        carteira = carteira + saque;
        console.log("CARTEIRA: " + carteira.toFixed(2));
        console.log("****************************************************************** ");
    }
}

// Registrando um novo objeto ContaCorrente
const ContaCorrenteRicardo = new ContaCorrente();
const ContaCorrenteAlice = new ContaCorrente();

// Populando os atributos do objeto ContaCorrente1
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo._saldo = 0;

// Populando os atributos do objeto ContaCorrente2
ContaCorrenteAlice.agencia = 1001;
ContaCorrenteAlice._saldo = 0;

console.log("\n");
console.log("********** RICARDO: ");
console.log(ContaCorrenteRicardo);
console.log("\n");
console.log("************ ALICE: ");
console.log(ContaCorrenteAlice);

// Movimentações da conta_RICARDO:
console.log("\n**************** Movimentações da conta_RICARDO: *************** ");
var carteira = 1000;
var valorDepositado = ContaCorrenteRicardo.depositar(100);
valorDepositado = ContaCorrenteRicardo.depositar(200);
valorDepositado = ContaCorrenteRicardo.depositar(-1);
var valorSacado = ContaCorrenteRicardo.sacar(50);
valorSacado = ContaCorrenteRicardo.sacar(500);
var carteiraRicardo = carteira;

// Movimentações da conta_ALICE:
console.log("\n**************** Movimentações da conta_ALICE: *************** ");
console.log("\n************************ Saldo ALICE: ************************ ");
carteira = 7000;
valorDepositado = ContaCorrenteAlice.depositar(5000);
valorDepositado = ContaCorrenteAlice.depositar(-1500);
valorDepositado = ContaCorrenteAlice.depositar(300);
valorSacado = ContaCorrenteAlice.sacar(7000);
valorSacado = ContaCorrenteAlice.sacar(2500);
var carteiraAlice = carteira;

// Imprimindo saldo final:
console.log("\n*********************** Saldo RICARDO: *********************** ");
console.log("Saldo Final, ContaCorrente_Ricardo: " + (ContaCorrenteRicardo._saldo).toFixed(2));
console.log("Saldo Final, CARTEIRA_Ricardo: " + carteiraRicardo.toFixed(2));

console.log("\n************************ Saldo ALICE: ************************ ");
console.log("Saldo Final, ContaCorrente_Alice: " + (ContaCorrenteAlice._saldo).toFixed(2));
console.log("Saldo Final, CARTEIRA_Alice: " + carteiraAlice.toFixed(2));