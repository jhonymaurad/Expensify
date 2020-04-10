import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses';

test('should render an Expense List item', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
