const prompt = require("prompt-sync")()

const nomeTurno = prompt("Turno: ")
const meta = Number(prompt("Meta :" ))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Itens por caixa: "))

let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

let itensRestantes = producaoFinal
let caixasNecessarias = 0

do {
    itensRestantes -= pecasPorCaixa
    caixasNecessarias++
} while (itensRestantes > 0)

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"
const resumo = `Turno: ${nomeTurno}\nProdução final: ${producaoFinal}\nCaixas necessárias: ${caixasNecessarias}\nSituação da meta: ${situacaoMeta}`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}