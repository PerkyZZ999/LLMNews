import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import { bootstrapLogging } from './logging'
import { AppRouter } from './router'

bootstrapLogging()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
