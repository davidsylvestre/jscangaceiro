class Negociacao {
  constructor(data, quantidade, valor) {
    Object.assign(this, { quantidade, valor })
    this._data = new Date(data.getTime())
    Object.freeze(this)
  }

  get volume() {
    return this.quantidade * this.valor
  }

  get data() {
    return new Date(this._data.getTime())
  }
}
