import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 100,
    createdAt: 1000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 50,
    createdAt: 5000
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
    createdAt: 2000
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
