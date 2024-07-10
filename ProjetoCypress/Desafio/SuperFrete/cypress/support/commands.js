
//Comandos customizados para reutilização

//Importa dados dos arquivos armazenados em support
import urls from './urls.js'
import infoDoFrete from '../selectors/infoDoFrete.cy.js';

// Importa a biblioteca do Xpath
 require('cypress-xpath')

Cypress.Commands.add('ValidacaoCalculoFrete', (cepOrigem, alturaPacote, larguraPacote, comprimentoPacote, cepDestino) => {

    // Limpa coockies e armazenamento
    cy.clearCookies();
    cy.clearLocalStorage()


    // Modifica o tamanho da tela para 1366, 768 
    cy.viewport(1366, 768);

    // Acessa o Site
    cy.visit(urls.site)

    // Timeout de 10 segundos para que os serviços e elementos carreguem completamente
    cy.wait(10000)

    // Tratamento de excessões, ignora erros não tratados
    cy.on('uncaught:exception', (err, runnable) => { return false })

    // Preenche informações do frete
    cy.xpath(infoDoFrete.origem).click({force: true}).type(cepOrigem)
    cy.xpath(infoDoFrete.formatoPacote).click({force: true})
    cy.xpath(infoDoFrete.tipoPacote).click({force: true})
    cy.xpath(infoDoFrete.peso).click({force: true})
    cy.xpath(infoDoFrete.valorPeso).click({force: true})
    cy.xpath(infoDoFrete.altura).click({force: true}).type(alturaPacote)
    cy.xpath(infoDoFrete.largura).click({force: true}).type(larguraPacote)
    cy.xpath(infoDoFrete.comprimento).type(comprimentoPacote)
    cy.xpath(infoDoFrete.cepDestino).click({force: true}).type(cepDestino)
    cy.xpath(infoDoFrete.calculaFrete).click({force: true})

})


Cypress.Commands.add('ValidacaoErroCalculo', (alturaPacoteMenor, larguraPacoteMenor, comprimentoPacoteMenor) => {

    cy.clearCookies();
    cy.clearLocalStorage()
    cy.viewport(1366, 768);
    cy.visit(urls.site)
    cy.wait(10000)
    cy.on('uncaught:exception', (err, runnable) => { return false })
    //cy.xpath(infoDoFrete.origem).click({force: true}).type(cepOrigem)
    cy.xpath(infoDoFrete.formatoPacote).click({force: true})
    cy.xpath(infoDoFrete.tipoPacote).click({force: true})
    cy.xpath(infoDoFrete.peso).click({force: true})
    cy.xpath(infoDoFrete.valorPeso).click({force: true})
    cy.xpath(infoDoFrete.alturaInferior).click({force: true}).type(alturaPacoteMenor)
    cy.xpath(infoDoFrete.larguraInferior).click({force: true}).type(larguraPacoteMenor)
    cy.xpath(infoDoFrete.comprimentoInferior).type(comprimentoPacoteMenor)
    //cy.xpath(infoDoFrete.cepDestino).click({force: true}).type(cepDestino)
    cy.xpath(infoDoFrete.calculaFrete).click({force: true})



})