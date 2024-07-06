import BotaoNavbar from '../../NavBar/BotaoNavbar'
import { useContextoAlura } from '../../../context/UseContextHook'
import { CircleX } from 'lucide-react'
import { ModalFormulario, IconeFechamento, ConteudoModal, FormsModal, BotoesForms } from '../../Formulario'
import React from 'react'
import { Componentes } from '../../../reducers/useReducerFormulario'

const Modal = () => {
  const { openModal, dispatch, videoAtual, salvarVideo, dispatchFormulario, videoModal, guardarObjeto } = useContextoAlura()

  const camposFormularioModal = Componentes.criarCamposFormularioModal(videoModal, guardarObjeto, dispatchFormulario, openModal)

  const renderizarCampoFormularioModal = (campo, index) => {
    const { tipo, ...props } = campo

    const Elemento = Componentes.componentesFormularioModal[tipo]
    return <Elemento key={index} {...props} />
  }

  React.useEffect(() => {
    dispatchFormulario({
      tipo: "setar-video",
      payload: { video: videoAtual }
    });
  }, [videoAtual, openModal])

  return (
    <ModalFormulario open={openModal}>
      <IconeFechamento onMouseDown={() => dispatch({ tipo: "fechar-modal" })}>
        <CircleX size={40} />
      </IconeFechamento>
      <ConteudoModal>
        <h2>Editar Card: </h2>
        <FormsModal>
          {renderizarCampoFormularioModal(camposFormularioModal[0], 0)}
          {renderizarCampoFormularioModal(camposFormularioModal[4], 4)}
          {camposFormularioModal.slice(1, 4).map(renderizarCampoFormularioModal)}
          <BotoesForms>
            <BotaoNavbar
              onClick={(e) => {
                e.preventDefault();
                salvarVideo(videoModal)
              }}
            >
              Salvar
            </BotaoNavbar>
            <BotaoNavbar
              onClick={(e) => {
                e.preventDefault()
                dispatchFormulario({ tipo: "limpar-campos-modal" })
              }}
            >
              Limpar
            </BotaoNavbar>
          </BotoesForms>
        </FormsModal>
      </ConteudoModal>
    </ModalFormulario>
  )
}

export default Modal
