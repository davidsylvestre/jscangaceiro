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
}
