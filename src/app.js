//install -> imoprt -> use
// import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter , {history} from './routers/AppRouter';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

import {firebase} from './firebase/firebase';


const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
})

// store.dispatch(addExpense({description:'Water bill', amount:4500}));
// store.dispatch(addExpense({description:'Gas bill', createdAt:1000}));
// store.dispatch(addExpense({description:'Rent', amount:109500}));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
            ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      store.dispatch(login(user.uid));
      console.log('uid', user.uid);
    store.dispatch(startSetExpenses()).then(() => {
       renderApp()
       if (history.location.pathname === '/') {
         history.push('/dashboard');
       }
      });
  } else {
      store.dispatch(logout());
      renderApp()
    history.push('/');
  }
});
