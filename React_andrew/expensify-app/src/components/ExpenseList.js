import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (  // taking its props from function it is connected to
    <div>
        <h1>Expense List</h1>
        {                                                   // ExpenseList - props.expenses  ===  mapStateToProps - state.expenses  === store.state.expenses
            props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => {    // store's state
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
