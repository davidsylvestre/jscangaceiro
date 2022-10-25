class Negociacoes {
  constructor() {
    this._negociacoes = []
  }

  adicona(negociacao) {
    this._negociacoes.push(negociacao)
  }

  get negociacoes() {
    return [...this._negociacoes]
  }

  get volumeTotal() {
    return this._negociacoes.reduce(
      (total, negociacao) => total + negociacao.volume,
      0
    )
  }
}
