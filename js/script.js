const items = [
    {
        id: "1",
        nome: "Lápis Faber Castell 12 Cores",
        preco: 12.99,
        categoria: "Escrita",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgLLWOdO6UFOUiqPoVA0t1xs10iSJfhAa91V33rh14bUqX5BfZD8J5ToHIEfu9_Uf3vV_9viYlAPAhF2j1hPuhEWJ_LZ5Dfnzd7o3Ig7zlwdoew4kaTIdozTVX4ZKTjQORjZO5sGk&usqp=CAc"
    },
    {
        id: "2",
        nome: "Caderno Espiral Tilibra 96 Folhas",
        preco: 14.90,
        categoria: "Caderno",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXCF0sKyEa_lWzAY2awb5F7ZTZLylmi0DAssPxjfYwP6k3FJnKFlkAiPpjht7UZONoaO__vEbr3z0UadqGfb8TvCM2AJixre9QlnIxkBPjxdiLI2QOZSwFVA"
    },
    {
        id: "3",
        nome: "Caneta Esferográfica BIC Azul",
        preco: 2.50,
        categoria: "Escrita",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdq1AeDc60NXjluTO1XwI9v94zQSOWKdH5NFlaw9jEFhohQ44yMHdoxrI-GQp8tjZ7A2OyfLPHBq0iSxp5ijVw-mGxHyFBYMGleEKHclPEauHhLqdVcxJgw_p3R-JOqomZxlPSou0&usqp=CAc"
    },
    {
        id: "4",
        nome: "Marca Texto Stabilo Boss Amarelo",
        preco: 7.99,
        categoria: "Escrita",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWcTNtAdnIPhHJ0wGNK5Ab8zQA7mdq5FLRQ&s"
    },
    {
        id: "5",
        nome: "Borracha Branca Escolar",
        preco: 1.99,
        categoria: "Escritório",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQj51PyeoHx9gJYqNkjCPqVRUVT1rPEBsz7rtsn5TkPY1IUeJlD3G7oebUfXhzd2ipi7wYPjnn4-jBDCIRuhQlkJ4MKh0x6_8PMcnWmZmV3nJ3diEixc1UrXBe9xiVpvKjZkFE__g&usqp=CAc"
    },
    {
        id: "6",
        nome: "Apontador com Depósito Maped",
        preco: 4.50,
        categoria: "Escritório",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeAfQm3s2yRfwWkUN5sWrimA53G0C_oavhqg3P3lpLjluRCiwu0O8k0JQmNOBJYIuT_fkvNr46H0_h0mILojYI1rWyKuy_5pUglVa3xl3Oqjji5nBoZkO6XYCtWiSzNXtSjOqeeF4&usqp=CAc"
    },
    {
        id: "7",
        nome: "Tesoura Escolar Sem Ponta",
        preco: 8.90,
        categoria: "Escritório",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO4Ds3bLAn7SodywJuz2MGTWtKeByDkUCmFu-5Lqf35Z38OtS46InSclseSQQgaMpg2SxyGEIl--x55_5rsdByJlQg7IEJbXOaX59qEcjDxhZYbOoiVyuf1g"
    },
    {
        id: "8",
        nome: "Cola Bastão 10g",
        preco: 3.50,
        categoria: "Escritório",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlQsjqdnQhDwJFVQ0tBMpeEGmaqUniIq0_w&s"
    },
    {
        id: "9",
        nome: "Estojo Escolar Simples",
        preco: 19.90,
        categoria: "Escritório",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4MK1nnZT2F7dAhDBadvlOq8w48HwOoe37zfv7nn-OZaT9xEulrnM-xcTU932fnFaMW7QTF67fL8BJYnPaAVaxd20JgV5rZhd7sH-wcvn0SgpTl6TVzzOkhQcLE0k-SP9dsDcmTw&usqp=CAc"
    },
    {
        id: "10",
        nome: "Lápis Preto HB Faber Castell",
        preco: 1.80,
        categoria: "Escrita",
        img: "https://images.tcdn.com.br/img/img_prod/785722/lapis_preto_faber_castell_hb_ecolapis_max_sextavado_6309_1_b83dfe829c0f6579db8462f09d72cc0f.jpg"
    },
    {
        id: "11",
        nome: "Kit Canetas Coloridas 12 Cores",
        preco: 15.90,
        categoria: "Escrita",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYMXMub4BcFZzSpZSXwEbLT4VSrPWdHpMZIT7k6H-yRlqaBjpeB8-f6dzhsjQQZgrzgSueYzw98m-1Wr3S5WoyIlM6bCTtu8g5M0bYxsxq77e_Z8x79XOSUG6nD88coBokvFkXmimgaA&usqp=CAc"
    }
];

const itemsDiv = document.getElementById('items');

// quando a pagina carrega
document.addEventListener("DOMContentLoaded", () => {

    // se existe um usuario salvo
    const usuario = localStorage.getItem('usuario');
    if(usuario){
        mostrarMensagem(`Bem vindo, ${usuario}!`);
        localStorage.removeItem('usuario');
    }

    const url = new URLSearchParams(window.location.search); // url da pagina

    // se na URL existe ?categoria
    if(url.get('categoria')) {
        const categoria = url.get('categoria'); // pegar o que vem depois de ? na url;

        // filtrar e pegar apenas items com a categoria da url
        const itemsFiltrados = items.filter((item) => item.categoria == categoria);

        // para cada item, adicionar html na div de items
        itemsFiltrados.forEach((item) => {

            itemsDiv.innerHTML += `
                <div class="item" id="${item.id}">
                    <p class="categoria"><a href="?categoria=${item.categoria}">${item.categoria}</a></p>
                    <img src="${item.img}" alt="Imagem ${item.img}" width="220px" height="190px">
                    <p class="nome-produto">${item.nome}</p>
                    <p class="preco">R$ ${String(item.preco.toFixed(2)).replace('.', ',')}</p>
                    <button type="button" class="add-btn" onclick="adicionarProdutoNoCarrinho(this);">Adicionar ao carrinho</button>
                </div>
            `
        });
    } else {
        // para cada item
        items.forEach((item) => {
    
            itemsDiv.innerHTML += `
                <div class="item" id="${item.id}">
                    <p class="categoria"><a href="?categoria=${item.categoria}">${item.categoria}</a></p>
                    <img src="${item.img}" alt="Imagem ${item.img}" width="220px" height="190px">
                    <p class="nome-produto">${item.nome}</p>
                    <p class="preco">R$ ${String(item.preco.toFixed(2)).replace('.', ',')}</p>
                    <button type="button" class="add-btn" onclick="adicionarProdutoNoCarrinho(this);">Adicionar ao carrinho</button>
                </div>
            `
        });
    }

});

function adicionarProdutoNoCarrinho(btn){
    // pegar o elemento pai do botao, que é a div do item
    const item = btn.parentElement;

    // id do item
    const idItem = item.id;

    // transformar uma string (do localstorage) em objeto [], se ele nao existe, pega um [] vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // se ja tem o item no carrinho (localstorage), se ja tem, pega ele
    const itemExistente = carrinho.find((item) => item.id == String(idItem));
    


    // pega o objeto da variavel items que possui o id do item da div
    const itemObj = items.find((item) => item.id == String(idItem));
    const data = {
        id: itemObj.id,
        nome: itemObj.nome,
        preco: itemObj.preco,
        img: itemObj.img,
        quantidade: itemExistente ? Number(itemExistente.quantidade) + 1 : 1 // se ja existe no carrinho, aumentar a quantidade em 1, se nao, adiciona 1 como valor padrao
    }

    // se ainda nao existe o carrinho no localStorage
    if(!carrinho){
        localStorage.setItem('carrinho', JSON.stringify(data)); // adiciona o objeto data em forma de string
    } else {
        // se já existe o item no carrinho
        if(itemExistente){
            // mudar apenas sua quantidade
            itemExistente.quantidade = data.quantidade;
        } else {
            // se nao, adicionar no carrinho
            carrinho.push(data);
        }

        // atualizar carrinho
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }


    mostrarMensagem('Produto adicionado ao carrinho');
    
}

function mostrarMensagem(texto){
    const mensagem = document.getElementById("mensagem");
    
    mensagem.style.display = "inline";
    mensagem.innerHTML = `<p>${texto}</p>`
    // define um tempo para q a mensagem seja invisivel apos nesse tempo
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 4000);
}