const cliente = "Lucas Almeida"

const produto = "Notebook Gamer"

const preco = 4500

const quantidade = 2

const estoque = 10

const valorPago = 9000


const subtotal = preco * quantidade


let estoqueDisponivel = "Não"

if (quantidade <= estoque) {
    estoqueDisponivel = "Sim"
} else {
    estoqueDisponivel = "Não"
}


let descontoPercentual = 0

if (subtotal >= 1000) {
    descontoPercentual = 10
} else {
    descontoPercentual = 0
}


const valorDesconto = subtotal * descontoPercentual / 100

const valorFinal = subtotal - valorDesconto


let pagamentoStatus = "Pagamento insuficiente"

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
}


let troco = 0

if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
}


let statusPedido = "Pedido não pode ser finalizado por falta de estoque"

if (estoqueDisponivel == "Sim") {
    statusPedido = "Pedido disponível para finalização"
}


const resumo = "Cliente: " + cliente + " Produto: " + produto + " Preço: R$ " + preco + " Quantidade: " + quantidade + " Subtotal: R$ " + subtotal + " Desconto: " + descontoPercentual + "% Valor do desconto: R$ " + valorDesconto + " Valor final: R$ " + valorFinal + " Estoque: " + estoqueDisponivel + " Valor pago: R$ " + valorPago + " Pagamento: " + pagamentoStatus + " Troco: R$ " + troco + " Pedido: " + statusPedido


module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}