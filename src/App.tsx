import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppForm from './components/AppForm';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppForm />
    </Provider>
  );
}

export default App;
