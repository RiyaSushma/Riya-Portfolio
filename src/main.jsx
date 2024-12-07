import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';
import { HrefStateProvider, ThemeStateProvider } from './State/Context.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'project',
        element: <Project/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeStateProvider>
      <HrefStateProvider>
        <RouterProvider router={router} />
      </HrefStateProvider>
    </ThemeStateProvider>
  </StrictMode>,
);
