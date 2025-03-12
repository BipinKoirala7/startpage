import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import ModalContextProvider from './Context/ModalContext/ModalContextProvider.tsx'
import SignUp from './components/Pages/SignUp/SignUp.tsx'
import SignIn from './components/Pages/SignIn/SignIn.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from './util/ThemeProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "signIn",
    element: <SignIn />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
