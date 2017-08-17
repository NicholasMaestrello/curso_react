const produto = {
    nome: 'Caneta',
    preco: 1.90,
    desconto: 0.05
}

function clone (obj) {
    return {...obj}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta azul'

console.log(produto, novoProduto)