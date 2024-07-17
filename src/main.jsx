import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import store from './store/store.js'
import { Provider } from 'react-redux'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CartProductPage from './pages/CartProductPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}






const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error page</div>,
    children: [{
      path: '/',
      element: <HomePage />
    },
    {
      path: '/productDetails/:id',
      element: <ProductDetailsPage />
    },
    {
      path: '/cartProducts',
      element: <CartProductPage />
    },
    {
      path: '/favorites',
      element: <FavoritesPage />
    }


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
