class NegociacoesView extends View {
  _renderizarNegociacao(negociacao) {
    return `
    <tr>
      <td>${DateConverter.paraTexto(negociacao.data)}</td>
      <td>${negociacao.quantidade}</td>
      <td>${negociacao.valor}</td>
      <td>${negociacao.volume}</td>
    </tr>
    `
  }
  template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>

      <tbody>
      ${model.negociacoes.map(this._renderizarNegociacao).join('')}
      </tbody>

      <tfoot>
        <tr>
        <td colspan="3"></td>
        <td>${model.volumeTotal}</td>
        </tr>
      </tfoot>
  </table>
  `
  }
}
