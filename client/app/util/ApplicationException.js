class ApplicationException extends Error {
  constructor(mensagem = '') {
    super(mensagem)
    this.name = this.constructor.name
  }
}
