import styled from 'styled-components'
import logo from '../../assets/logoaluraback.png'
import BotaoNavbar from './BotaoNavbar'
import Header from './Header'

const WrapperBotoes = styled.div`
  display: flex;
  gap: 2rem;
  align-items: inherit;
  width: fit-content;
`

const NavBar = () => {

  return (
    <Header>
      <nav>
        <img src={logo} alt="Logo AluraFlix" />
        <WrapperBotoes>
          <BotaoNavbar to={`/`} tipo={`Link`}>
            Home
          </BotaoNavbar>
          <BotaoNavbar to={`cadastro`} tipo={`Link`}>
            Novo Vídeo
          </BotaoNavbar>
        </WrapperBotoes>
      </nav>
    </Header>
  )
}

export default NavBar
