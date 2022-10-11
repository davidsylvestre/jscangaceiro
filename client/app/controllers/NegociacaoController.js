class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document)
    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
    this._negociacoes = new Negociacoes()
  }

  adiciona(event) {
    event.preventDefault()
    this._negociacoes.adicona(this._criaNegociacao())
    this._limparFormulario()
  }

  _criaNegociacao() {
    const data = DataConverter.paraData(this._inputData.value)
    return new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    )
  }

  _limparFormulario() {
    this._inputData.value = ''
    this._inputQuantidade.value = 1
    this._inputValor.value = 0.0
    this._inputData.focus()
  }
}