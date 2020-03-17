import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Form from './components/Form';
import './App.scss';
import Result from './components/Result';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Result />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
