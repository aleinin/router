import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, Router } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Set up a Router instance
const router = new Router({
  routeTree,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
