describe('Informações do frete devem ser preenchidas exceto cep origem e destino', () => {

  // Armazena informações do frete de fixtures/ example em "valores".
  // Variável temporaria "dados" recebe informações do frete de valores da fixture/ example

  let dados;
  before(() => {
    cy.fixture('example').then((valores) => {
      dados = valores;
    });
  });

  it('Sugerir campos obrigatórios no cep de destino/ origem, apresentar mensagens de erro nas dimensões do pacote', () => {

    cy.ValidacaoErroCalculo(dados.alturaPacoteMenor, dados.larguraPacoteMenor, dados.comprimentoPacoteMenor)

  })
})

