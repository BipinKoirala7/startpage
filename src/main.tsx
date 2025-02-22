import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  ModalContextProvider  from './Context/ModalContext/ModalContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider >
      <App />
    </ModalContextProvider>
  </StrictMode>,
)
