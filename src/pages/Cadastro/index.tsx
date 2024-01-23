import Cabecalho from '../../containers/Cabecalho'
import NovoContato from '../../components/NovoContato'
import BotaoNovoContato from '../../components/BotaoNovoContato'

const Cadastro = () => (
  <>
    <Cabecalho estaNaHome={false} />
    <NovoContato />
    <BotaoNovoContato estaNaHome={false} />
  </>
)

export default Cadastro
