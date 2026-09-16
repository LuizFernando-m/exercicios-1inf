// const cliente = "Mariana Silva";
const cliente = "Mariana Silva"
const cidade = "Fortaleza";
const produto = "Notebook Pro";
const categoria = "Notebook";
const preco = 3500;
const quantidade = 2;
const descontoPercentual = 10;
const valorPago = 7000;
const subtotal = preco * quantidade;
const valorDesconto = (subtotal * descontoPercentual) /100;
const valorFinal = (subtotal - valorDesconto);
const troco = (valorPago - valorFinal);

console.log(`TECHSTORE SISTEMAS
  RESUMO DO PEDIDO
Cliente: ${cliente}
Cidade: ${cidade}
Produto: ${produto}
Categoria: ${categoria}
Preco: R$ ${preco}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal}
Desconto: R$ ${valorDesconto}
Valor Final: R$ ${valorFinal}
Valor Pago: R$ ${valorPago}
Troco: R$ ${troco}
Obrigado pela compra!`)

const resumo = `${cliente} fez o pedido de um ${produto} e recebeu R$ ${troco} de troco tendo R$ ${valorFinal}`






// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}