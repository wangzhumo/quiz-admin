import { getCurrentLocale, getCurrentMessages } from '@/locales'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import './index.css'
import { router } from '@/modules/router/routes'
import { RouterProvider } from 'react-router-dom'
import { consola } from 'consola/browser'

consola.wrapConsole()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <IntlProvider locale={getCurrentLocale()} messages={getCurrentMessages()}>
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
)
