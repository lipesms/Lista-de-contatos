import Cabecalho from '../../containers/Cabecalho'
import ListaContatos from '../../containers/ListaContatos'
import BotaoNovoContato from '../../components/BotaoNovoContato'

const Home = () => (
  <>
    <Cabecalho estaNaHome />
    <ListaContatos />
    <BotaoNovoContato estaNaHome />
  </>
)

export default Home
