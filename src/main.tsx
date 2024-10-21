import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TelefonLista } from './components/TelefonLista';
import { TelefonFelvetel } from './components/TelefonFelvetel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelefonLista />,
  },
  {
    path: "/telefonok",
    element: <TelefonLista />,
  },
  {
    path: "/telefonfelvetel",
    element: <TelefonFelvetel />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
