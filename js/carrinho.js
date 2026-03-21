document.addEventListener("DOMContentLoaded", () => {
    // pegar o carrinho salvo no local storage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if(carrinho){
        // para cada item salvo, adiciona a sua parte html
        carrinho.forEach((item) => {
            tbody.innerHTML += `
                <tr>
                    <td class="produto-td">
                        <img src="${item.img}" alt="Imagem ${item.img}" width="90px" height="90px">
                        <p>${item.nome}</p>
                    </td>
                    <td class="center-td" data-id=${item.id}>
                        <i class="fa-solid fa-plus input-mudar-quantidade" onclick="aumentarQuantidade(this);"></i>
                        <input type="number" class="input-quantidade" value=${item.quantidade} disabled>
                        <i class="fa-solid fa-minus input-mudar-quantidade" onclick="diminuirQuantidade(this);"></i>
                    </td>
                    <td class="center-td td-preco">
                        <div class="preco">R$ ${String(item.preco.toFixed(2)).replace('.', ',')}</div>
                    </td>
                    <td class="center-td">
                        <div class="preco preco-total-item">R$ ${String((item.preco * item.quantidade).toFixed(2)).replace('.', ',')}</div>
                    </td>
                </tr>
            `;
        });
    }

    atualizarTotal();   
});

function atualizarTotal(){
    let total = 0;

    // cria um objeto com todos os preços totais presentes (de cada item)
    const totalItems = document.querySelectorAll('.preco-total-item');

    // para cada valor total da tabela
    totalItems.forEach((item) => {
        const preco = item.textContent;

        // transformar o preco em numero decimal valido
        const numPreco = Number(
            preco.split('R$ ')[1].replace(',', '.')
        );

        // atualizar let total
        total += numPreco;
    });

    // atualizar preco total
    document.getElementById('preco-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function deletarItem(carrinho, itemCarrinho){
    // cria um novo carrinho sem o item com o id
    const novoCarrinho = carrinho.filter((item) => item.id != itemCarrinho.id);

    // atualiza carrinho no local storage
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
}

function aumentarQuantidade(btn){
    // pegar a linha da tabela do botao e a linha toda com o item
    const td = btn.parentElement;
    const tr = td.parentElement;

    // pegar o input daquela linha
    const input = td.querySelector('input');

    // pegar o id do item daquela linha
    const itemId = td.dataset.id;

    // atualizar valor presente no input
    input.value = Number(input.value) + 1;

    // pegar o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // encontrar o item com a quantidade atualizada
    const itemCarrinho = carrinho.find(item => item.id == itemId);

    if (itemCarrinho) {
        // atualizar quantidade do item
        itemCarrinho.quantidade = Number(input.value);
    }

    // salvar o carrinho todo, com o item com a quantidade nova salva
    localStorage.setItem('carrinho', JSON.stringify(carrinho));



    // pegar preco unitario do item do local storage
    const preco = itemCarrinho.preco;

    // atualizar preco total na tabela com valor unitario x quantidade
    const precoTotal = preco * input.value;
    const precoTotalDiv = tr.querySelector('.preco-total-item');
    precoTotalDiv.textContent = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;

    atualizarTotal();
}

function diminuirQuantidade(btn){
    // pegar a linha da tabela do botao e a linha toda com o item
    const td = btn.parentElement;
    const tr = td.parentElement;

    // pegar o input daquela linha
    const input = td.querySelector('input');

    // pegar o id do item daquela linha
    const itemId = td.dataset.id;



    // pegar o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // encontrar o item com a quantidade atualizada
    const itemCarrinho = carrinho.find(item => item.id == itemId);



    // se a nova quantidade sera atualiada para 0
    if (input.value <= 1){
        deletarItem(carrinho, itemCarrinho);

        // remover linha da tabela
        tr.remove();

        atualizarTotal();

        return;
    }
    


    if (itemCarrinho) {
        // atualizar quantidade do item
        itemCarrinho.quantidade = Number(input.value);
    }

    // atualizar valor presente no input
    input.value = Number(input.value) - 1;


    // salvar o carrinho todo, com o item com a quantidade nova salva
    localStorage.setItem('carrinho', JSON.stringify(carrinho));



    // pegar preco unitario do item do local storage
    const preco = itemCarrinho.preco;

    // atualizar preco total na tabela com valor unitario x quantidade
    const precoTotal = preco * input.value;
    const precoTotalDiv = tr.querySelector('.preco-total-item');
    precoTotalDiv.textContent = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;

    atualizarTotal();
}