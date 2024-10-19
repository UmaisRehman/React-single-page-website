import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "product",
        element: <Product />
      }
    ]
  },
  {
    path:"*",
    element: <h1>404! Page Not Found</h1>
  }
])



createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)