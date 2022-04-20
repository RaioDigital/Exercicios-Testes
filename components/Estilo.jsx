export default function Estilo(props) {

  const classAplicada = props.numero >= 0 ? "azul" : "vermelha"

  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Texto #01
      </h1>
      <h2 className={classAplicada}>Texto #02</h2>
    </div>
  )
}
