import {createStore, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = createStore(rootReducer, composeEnhancers());

export default store;