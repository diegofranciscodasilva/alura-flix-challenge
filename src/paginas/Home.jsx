import Banner from '../components/Banner'
import Card from '../components/Card'
import ConteudoPrincipal from '../components/ConteudoPrincipal'
import Secao from '../components/Secao'
import { useContextoAlura } from '../context/UseContextHook'

const Home = () => {
  const { videos } = useContextoAlura()

  return (
    <>
      <Banner />
      <ConteudoPrincipal>
        {Object.keys(videos).map(secao => {
          return <Secao key={secao} secao={secao}>
            {videos[secao].map((card) => {
              return <Card key={card.id} imagem={card.imagem} titulo={card.categoria} alt={card.titulo} id={card.id} />
            })}
          </Secao>
        })}
      </ConteudoPrincipal>
    </>
  )
}

export default Home
