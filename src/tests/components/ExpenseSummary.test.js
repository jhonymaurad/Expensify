import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseSummary correctly with one expense', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={expenses.length} expenseTotal={114195} />
  );
  expect(wrapper).toMatchSnapshot();
});
