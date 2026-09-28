// src/App.jsx
// Root component — all providers are set up here.

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider }  from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { CompanyProvider } from './contexts/CompanyContext'
import { LiveUsersProvider } from './contexts/LiveUsersContext'
import { router }        from './app/router'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CompanyProvider>
          <LiveUsersProvider>
            <RouterProvider router={router} />
            <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              boxShadow: 'var(--shadow-dropdown)',
            },
          }}
        />
          </LiveUsersProvider>
        </CompanyProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
