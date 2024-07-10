module.exports= {

    origem: "//input[@id='originPostcode']",
    formatoPacote: "//div[@id='object_format']",
    tipoPacote: "//li[@data-value='1']",
    peso: "//div[@id='weight']",
    valorPeso: "//li[@data-value='0.3']",
    altura: "//input[@id='packageHeight']",
    largura: "//input[@id='packageWidth']",
    comprimento: "//input[@id='packageDepth']",
    cepDestino: "//input[@id='destinationPostcode']",
    calculaFrete: "//button[@data-cy='calculator-submit']",
    alturaInferior: "//input[@id='packageHeight']",
    larguraInferior: "//input[@id='packageWidth']",
    comprimentoInferior: "//input[@id='packageDepth']",

}



// AQUI ABAIXO É POSSÍVEL CONFERIR O MAPEAMENTO DOS SELETORES ANTES DA MELHORIA DO CÓDIGO
// UTILIZANDO O XPATH

// cy.get("input[id='originPostcode'").type(cepOrigem)
// cy.get("div[data-cy='calculator-format'").click()
// cy.get("li[data-value='1'").click()
// cy.get("div[data-cy='calculator-weight'").click()
// cy.get("li[data-value='0.3'").click()
// cy.get("input[name='package_height'").type(alturaPacote)
// cy.get("input[name='package_width'").type(larguraPacote)
// cy.get("input[name='package_depth'").type(comprimentoPacote)
// cy.get("input[id='destinationPostcode'").type(cepDestino)
// cy.get("button[data-cy='calculator-submit'").click()