import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//pages
import App from './App.jsx'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error page</div>,
    children: [{
      path: '/',
      element: <HomePage />
    },


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
