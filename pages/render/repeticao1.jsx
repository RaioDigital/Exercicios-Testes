export default function repeticao1() {
  const listaAprovados = ["João", "Maria", "Ana", "Bia", "Carlos", "Daniel", "Laura", "André"]

  function renderizarLista() { 
    const itens = [];

    //Laço FOR
    for (let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
  }


  /*function renderizarLista() { //Lista
    //return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)

    //Modo 2
    return listaAprovados.map(function(nome, i) {
        return <li key={i}>{nome}</li>
    })

  }*/

  return (
    <>
      <ul>{renderizarLista()}</ul>
    </>
  )
}
