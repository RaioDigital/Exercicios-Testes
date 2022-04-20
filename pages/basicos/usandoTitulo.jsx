import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo
            principal="Página de Cadastro"
            secundario="Incluir, alterar e excluir coisas"
            />

            <Titulo
            principal="Página de Login"
            secundario="Informe seu email e senha"
            pequeno={true}
            />            

            <Titulo
            principal="Página de home"
            secundario="Informe comentários"  
            pequeno          
            />

        </div>
        
    )
}