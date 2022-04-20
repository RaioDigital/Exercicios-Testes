export default function repeticao1() {
  const listaAprovados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura",
  ]

  function renderiazarLista() {
    return (
      <>
        <li>Elemento #01</li>
        <li>Elemento #02</li>
        <li>Elemento #03</li>  
        
      </>
    )
  }

  return <ul>{renderiazarLista()}</ul>
}
