import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import AppCalculator from './components/AppCalculator'
import './App.scss'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppCalculator />
    </Provider>
  )
}

export default App