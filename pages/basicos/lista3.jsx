function gerarLista(final = 10) {
  const lista = [] //para i de 0 a 10
  for (let i = 1; i <= final; i++) {    
    lista.push(<span>{i},</span>);
  }
  return lista
}

export default function lista() {
  return (
    <div>
      <div>
          {gerarLista(5)}
      </div>
      <div>
          {gerarLista(3)}
      </div>
    </div>
  )
}
