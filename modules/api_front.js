function valueList () {
    const inputElement = document.getElementById('choose').value

    //fetch('http://localhost:3030/'+`${inputElement}`)
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

/*var wait = document.getElementById("quote");   
wait.addEventListener("click", valueList, false);*/

function valueReset() {
    const inputReset = document.getElementById('choose').value = "";
    const clean = document.getElementById("price");
  
    // Remove todos os descendentes da <div id="alvo">
    clean.innerText = "";
};
