import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './Context/authContext.jsx'
import { SocketConnectionProvider } from './Context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SocketConnectionProvider>
        <App />
      </SocketConnectionProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
