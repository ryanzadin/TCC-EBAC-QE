        Funcionalidade: Adcionar itens ao carrinho
        Como cliente da EBAC-SHOP
        Quero adicionar produtos no carrinho
        Para realizar a compra dos itens

        "- Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
        - Os valores não podem ultrapassar a R$ 990,00;
        - Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
        - Valores acima de R$ 600 ganham cupom de 15% "

        Contexto:
        Dado que eu esteja logado com meu usuario no site EBAC Shop

        Cenário: Adição valida ao carrinho
        Quando escolher o produto desejado selecionar tamanho, cor e quantidade
        E apertar em comprar
        Então o item sera adicionado ao carrinho

        Cenário: Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho
        Quando escolher o produto "Ingrid Running Jacket" selecionar tamanho "XS", cor "Orange" e quantidade "11"
        E apertar em comprar
        Então o site deve exibir uma mensagem de erro

        Cenário: Os valores não podem ultrapassar a R$ 990,00
        Quando escolher o produto "Ingrid Running Jacket" selecionar tamanho "XS", cor "Orange" e quantidade "11"
        E o produto "Abominable Hoodie" selecionar tamanho "XS", cor "Blue" e quantidade "4"
        E apertar em comprar
        Então o site deve exibir uma mensagem de erro por passar do valor limite

        Cenário: Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
        Quando escolher o produto "Ingrid Running Jacket" selecionar tamanho "XS", cor "Orange" e quantidade "5"
        E apertar em comprar
        Então o site deve exibir o Dashboard e oferecer um cupom de 10% de desconto

        Cenário: Valores acima de R$ 600 , ganham cupom de 15%
        Quando escolher o produto "Ingrid Running Jacket" selecionar tamanho "XS", cor "Orange" e quantidade "8"
        E apertar em comprar
        Então o site deve exibir o Dashboard e oferecer um cupom de 15% de desconto

        Esquema do Cenário: Adcionar ao carrinho
        Quando escolher o <produto> selecionar <tamanho>, <cor> e <quantidade>
        E apertar em comprar
        Então o site deve exibir uma <mensagem> de sucesso

        Examples:
            | produto                 | tamanho | cor    | quantidade | mensagem                                                     |
            | Ingrid Running Jacket   | XS      | Orange | 6          | “Ingrid Running Jacket” foram adicionados no seu carrinho.   |
            | Augusta Pullover Jacket | S       | Blue   | 2          | “Augusta Pullover Jacket” foram adicionados no seu carrinho. |
            | Josie Yoga Jacket       | M       | Orange | 11         | "Josie Yoga Jacket" foram adicionados no seu carrinho.       |