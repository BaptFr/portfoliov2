import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import { RouterProvider,  BrowserRouter  } from 'react-router-dom';
import { router } from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfoloiov2/"></BrowserRouter>
    <RouterProvider router={ router } >
    </RouterProvider>
  </StrictMode>,
)
