import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import PayForm from './components/PayForm';
import Result from './components/Result';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PayForm 
              initialValues={{
                payType: 'option1', 
                payAmount: 0
              }} 
              onSubmit={(values) => console.log("Hello", values)}
            />
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
