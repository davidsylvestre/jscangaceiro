class DateConverter {
  constructor() {
    throw new Error('Esta classe não pode ser instanciada')
  }

  static paraTexto(data) {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    return `${dia}/${mes}/${ano}`
  }

  static paraData(texto) {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(texto)) throw new DataInvalidaException()
    return new Date(
      ...texto
        .split('/')
        .reverse()
        .map((item, indice) => item - (indice % 2))
    )
  }
}
