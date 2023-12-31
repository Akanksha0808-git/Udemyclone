import React from 'react'
import ReactDOM from 'react-dom/client'
import DataStore from './Components/ContextAPI/DataStore.jsx'
import App from './App.jsx'
import './index.css'
import store from './Components/Redux/store.jsx';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
<DataStore>
    <App />
    </DataStore>
    </React.StrictMode>
 </Provider>
)
