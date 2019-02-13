import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
import Stack from './components/Stack.js';
import { setStack } from './actions';

const store = createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({id: 1, title: 'example', cards: []}));

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={App} />  
            <Route path='/stack' component={Stack} />     
         </Switch>
      </BrowserRouter>
   </Provider>, 
   document.getElementById('root'))
;