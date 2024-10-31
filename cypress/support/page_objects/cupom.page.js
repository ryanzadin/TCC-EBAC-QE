class cupomDesconto {
    visitarUrl(){
        cy.visit('carrinho')
    }
    adcionarCupom(cupom){
        cy.get('#coupon_code')
        .contains(cupom)
        .click()
    }

}

export default new cupomDesconto()