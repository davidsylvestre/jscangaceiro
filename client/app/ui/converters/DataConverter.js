class DataConverter {
  constructor() {
    throw new Error('Esta classe não pode ser instanciada')
  }

  static paraTexto(data) {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    return `${dia}/${ano}/${mes}`
  }

  static paraData(data) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
      throw new Error('Deve estar no formato aaaa-mm-dd')
    return new Date(
      ...texto.split('-').map((item, indice) => item - (indice % 2))
    )
  }
}
