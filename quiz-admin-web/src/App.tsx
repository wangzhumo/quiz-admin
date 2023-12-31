import styles from '@/App.module.css'
import { router } from '@/router/routes'
import { Grommet } from 'grommet'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Grommet className={styles.fullscreen}>
      <RouterProvider router={router} />
    </Grommet>
  )
}

export default App
