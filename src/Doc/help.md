# App para consulta de índices financeiros, câmbios e criptomoedas

## Materia destinado para suporte na utilização da Api

Criação de duas rotas para consumo externo.

A primeira rota é destinada a cotações de moedas, para acessar utilizar o caminho </v1/api/exchange> até o momento não é necessário utilizar chave para realizar a requisição.

## Essa requisição fornecerá 9 Moedas

- USD-BRL - Dolar Comercial
- USDT-BRL - Dolar Turismo
- EUR-BRL - Euro
- CAD-BRL - Dolar Canadense
- GBP-BRL - Libra Esterlina
- ARS-BRL - Peso Argentino
- JPY-BRL - Iene Japonês
- CHF-BRL - Franco Suíço
- CNY-BRL - Yuan Chinês

## Definições dos campos a serem utilizados para Câmbios

- key - É uma chave interna que utilizamos em nossos filtros.

- name - O nome da Moeda.

- symbol - O código da Moeda.

- conversion_currency - Moeda base para o seu preço final.

- price_buy - Preço de compra da Moeda.

- price_sale - Preço de venda da Moeda.

- last_updated_price - Última vez que o preço foi atualizado.

A Segunda rota é destinada a cotações de criptomoedas, para acessar utilizar o caminho </v1/api/cripto> até o momento não é necessário utilizar chave para realizar a requisição.

## Essa requisição fornecerá 14 Criptomoedas

- BTC-USD - Bitcoin
- DOGE-USD - Dogecoin
- XRP-USD - XRP
- XMR-USD - Monero
- XLM-USD - Stellar
- USDT-USD - Tether
- ETH-USD - Ethereum
- BNB-USD - Binance Coin
- LINK-USD - Chainlink
- ADA-USD - Cardano
- XTZ-USD - Tezos
- VET-USD - VeChain
- DOT-USD - Polkadot
- UNI-USD - Uniswap

## Definições dos campos a serem utilizados para Criptomoedas

- key - É uma chave interna que utilizamos em nossos filtros.

- name - O nome de Criptomoeda.

- symbol - O código da Criptomoeda.

- num_market_pairs - Retorna o total de agências, bancos ou corretoras que negociam a criptomoeda.

- max_supply - A melhor aproximação da quantidade máxima de moedas que existirá durante a vida da criptomoeda. Isso também é conhecido como o número máximo teórico de moedas que serão cunhadas.

- circulating_supply - O Circulating Supply é a melhor aproximação da quantidade de ativos que estão circulando no mercado e nas mãos do público em geral. Descobrimos que o fornecimento circulante é uma métrica muito melhor do que o  fornecimento total  para determinar a capitalização de mercado. O método de uso da Oferta Circulante é análogo ao método de uso do  float público  para determinar a capitalização de mercado de empresas em investimentos tradicionais.

- total_supply - Definimos Suprimento total como a quantidade total de moedas existentes no momento, menos quaisquer moedas que tenham sido queimadas de forma comprovada.

- conversion_currency - Moeda base para o seu preço final.

- price_sale - Preço de venda da Criptomoeda.

- last_updated_price - Última vez que o preço foi atualizado.

- volume_24h - Uma medida de quanto de uma criptomoeda foi negociada nas últimas 24 horas.

- market_cap - O valor total de mercado do suprimento circulante de uma criptomoeda. É análogo à capitalização free-float no mercado de ações.

Valor de mercado = preço atual x oferta circulante.

OBS: Até o presente momento ainda não disponibilizamos consultas personalizadas, mas estamos trabalhando para liberar mais tipos de consultas.

**Documentação V1.0** atualizado em **27/02/2021**
