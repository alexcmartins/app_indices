/* Função que acessa o valor do input e incrementa ao link para fazer a requisição.
É feita tratativa da resposta, após a mesma foi mapeada e com o retorno foi criada uma 
nova div com os campos selecionados*/

function valueList () {
    const inputElement = document.getElementById('choose').value

    /*fetch('http://localhost:3030/'+`${inputElement}`) - 
    Link utilizado internamente para desenvolvimento.*/

    fetch('http://cmdev.ddns.net:3030/'+`${inputElement}`)   
        .then(response => {
            if (!response.ok) {
                throw Error("Errou");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(function (item) {
                return `
                <div class="cotacao">
                    <p>Moeda: ${item.code} </p>
                    <p>Preço de Venda: ${item.ask} </p>
                    <p>Preço de Compra: ${item.bid} </p>
                    <p>Alta: ${item.high} </p>
                    <p>Baixa: ${item.low} </p>
                    <p>Variação: ${item.pctChange} %</p>
                    <p>Data: ${item.create_date} </p>
                </div>
                `;
            })
            .join("");
            console.log(html);
            document
            .querySelector("#price")
            .insertAdjacentHTML("afterbegin", html)
        })
        .catch(error => {
            console.log(error);
        });    
};

/* Essa função seria para esperar o evento do click no botão cotar para chamar as funções abaixo.
No momento essa função está desativada.

var wait = document.getElementById("quote");   
wait.addEventListener("click", valueList, false);*/

// Função que acessa o Html5 no campo value do input e zera todos os valores.
function valueReset() {
    const inputReset = document.getElementById('choose').value = "";
  
    // Remove todos os elemetos da <div id="price">
    const clean = document.getElementById("price");
    clean.innerText = "";
};
