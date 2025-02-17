import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  ModalContextProvider  from './Context/ModalContextProvider.tsx'
import Modal from './components/UI/Modal/Modal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider >
      <App />
      <Modal />
    </ModalContextProvider>
  </StrictMode>,
)
