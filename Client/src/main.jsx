import React from 'react'
import ReactDOM from 'react-dom/client'
import DataStore from './Components/ContextAPI/DataStore.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <DataStore> */}
    <App />
    {/* </DataStore> */}
  </React.StrictMode>,
)
