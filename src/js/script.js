const  productExemplo = {id:0,
nome: "Combo Whopper",
preco: 32.90,
image: "./src/assets/combo_whopper.png"}

function creatcadProduct(){
  const tagLi = document.createElement("li")
tagLi.classList.add("cardProduct")
tagLi.innerHTML = `
<img src="${produto.image}" alt="${produto.nome}">
<h3>${produto.nome}</h3>
<p>R$ ${produto.preco}</p>
<button type="button" id="${produto.id}">Adicionar</button>
`
return tagLi
}
function listProduct(listProduct){

    for(let i  = 0; i<listProduct.length; i++){
        
        const product = listProduct[i]

        //4) PASSAR PARA FUNÇÃO/PARA CRIAR O CARD DE PRODUTO
        const cardMontad = creatcardProduct(product)
       
        //5) ADICIONAR ELEMENTO (LI) => NA TELA => COMO FILHO DA TAG UL
        produtosLista.appendChild(cardMontad)

    }

}
listProduct(product)

//CRRINHO DE COMPRAS  
let cart = []

//ADICIONANDO INTERCEPTADOR NA LISTA DE PRODUTOS 
produtosLista.addEventListener("click", addProductCart)
function adicionarProdutoCarrinho(event){
    
    //IDENTIFICANDO ELEMENTO CLICADO
    const button = event.target
    
    //VERIFICANDO SE É UM BOTÃO
    if(button.tagName == "BUTTON"){
        
        //RECUPERANDO ID => IDENTIFICADO DO PRODUTO
        const idProduto = button.id

        //PESQUISAR SE ESSE PRODUTO É EXISTENTE => BASE
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const productFiltered = product.find((produto)=> produto.id == idProduto)
        
        //ADICIONANDO PRODUTO NO CARRINHO
        cart.push(productFiltered)
        
        //LISTAR NA TELA DOS PRODUTOS
        listarProdutosCarrinho()

        //FUNÇÕES QUE ATUALIZA TOTAL
        atualizarTotal()
    }
    
}

//LISTAR PRODUTOS DO CARRINHO
function listProductsCart(){

    listProducts.innerHTML = ""

    //PERCORRENDO PRODUTOS DO CARRINHO
    for(let i = 0; i<cart.length; i++){

        //RECUPERANDO CADA PRODUTO
        const produto = carrinho[i]

        //CRIAR O TEMPLATE 
        const tagLi = document.createElement("li")
        tagLi.classList.add("cardProduto")
        
        tagLi.innerHTML = `
            <!--  NOME/FOTO PRODUTO  -->
            <div class="infoNome">
                <img src="${produto.image}" alt="${produto.nome}">
                <p>${produto.nome}</p>
            </div>
        
            <!-- PREÇO PRODUTO -->
            <div class="infoPreco">
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>
                    <img src="./src/assets/lixo.png" alt="Lixo para remover produto">
                </button>
            </div>
        `
        listaProduct.appendChild(tagLi)
        
    }
  
}

//ATUALIZAR TOTAL CARRINHO 
function atualizarTotal(){

    const infoPreco = document.querySelector(".infoPreco")
   
    let total = 0
    for(let i = 0; i < carrinho.length; i++){

        const produto = carrinho[i]

        total += produto.preco
    }
    infoPreco.innerText = `Total: R$ ${total.toFixed(2)}`

}

const listProductCart = document.querySelector(".listProduct")
listProductCart.addEventListener("click", removerProductCart)

function removerProductCart(event){
    const botaoExcluir  = event.target

    if(botaoExcluir.tagName == "BUTTON"){

        //REMOVENDO APENAS NO HTML
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        botaoExcluir.closest("li").remove()

        //produto <= FILTRO COM O FIND 
        //posicao numerica <= carrinho.INDEXOF(produto)
        //carrinho.SPLICE(posicao, 1)
    }
}