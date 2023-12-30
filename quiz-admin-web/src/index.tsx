import { getCurrentLocale, getCurrentMessages } from 'locales'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import routes from 'router/routes'
import 'styles/index.scss'
import './index.css'
import reportWebVitals from './reportWebVitals'
import store, { persistor } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter(routes)
root.render(
  <React.StrictMode>
    <IntlProvider locale={getCurrentLocale()} messages={getCurrentMessages()}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </IntlProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
