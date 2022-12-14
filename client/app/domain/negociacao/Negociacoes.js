class Negociacoes {
  constructor() {
    this._negociacoes = []
    Object.freeze(this)
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao)
  }

  esvazia() {
    this._negociacoes.length = 0
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
