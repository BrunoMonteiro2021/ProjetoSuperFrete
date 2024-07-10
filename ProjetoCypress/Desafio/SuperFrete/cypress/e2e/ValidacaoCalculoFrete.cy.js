describe('Informações do frete devem ser preenchidas', () => {

  // Armazena informações do frete de fixtures/ example em "valores".
  // Variável temporaria "dados" recebe informações do frete de valores da fixture/ example

  let dados;
  before(() => {
    cy.fixture('example').then((valores) => {
      dados = valores;
    });
  });
  it('Deve apresentar informações de mini envios, PAC eSEDEX', () => {

    cy.ValidacaoCalculoFrete(dados.cepOrigem, dados.alturaPacote, dados.larguraPacote, dados.comprimentoPacote, dados.cepDestino)

  })
})

