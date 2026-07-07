const produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "Webcam", preco: 80 }
];
const produtoId3 = produtos.find(produto => produto.id === 3);
console.log("Produto id 3:", produtoId3);
const produtosCaros = produtos.filter(produto => produto.preco > 100);
console.log("Produtos acima de 100:", produtosCaros);
const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes:", nomesProdutos);
produtos.forEach(produto => {
    console.log(
        `Produto: ${produto.nome} - Preço: R$ ${produto.preco}`
    );
});