import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "../redux/store/index.ts"
import { Provider } from 'react-redux' 
ReactDOM.createRoot(document.getElementById('root')!).render(

  //envolvemos todo el estado global en la aplicación
  <Provider store={store}>
    <App />
  </Provider>,
)
