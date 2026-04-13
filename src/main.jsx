import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import App from './App'
import { ProviderContext } from './components/Context/Contextapi'


library.add(faCircleUser)

createRoot(document.getElementById('root')).render(

    <ProviderContext>
      <App/>
    </ProviderContext>

)
