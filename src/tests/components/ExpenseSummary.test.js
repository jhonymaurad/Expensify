import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseSummary correctly', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={expenses.length} expenseTotal={114195} />
  );
  expect(wrapper).toMatchSnapshot();
});
