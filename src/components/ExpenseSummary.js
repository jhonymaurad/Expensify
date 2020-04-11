import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export function ExpenseSummary(props) {
  return (
    <div>
      {props.expenseCount > 1 ? (
        <p>
          Viewing {props.expenseCount} expenses totalling ${props.expenseTotal}
        </p>
      ) : (
        <p>
          Viewing {props.expenseCount} expense totalling ${props.expenseTotal}
        </p>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
