class cupomDesconto {

    adcionarCupom(cupom){
        cy.get('#coupon_code').type(cupom).click()
        cy.get('.coupon > .btn').click()
    }

}

export default new cupomDesconto()