import React from 'react';
import { connect } from 'react-redux';   // when importing connect it can be connected to store from anywhere, where the Provider is being used
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (     // props will have access to store state
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))   // we need to change state.filter.text to change the value of input
            }}
        />  {/* using onChange so the value can be changed (if you define value inline you cant change it) */}
        <select
            value={props.filters.sortBy}
            onChange={e => {
                e.target.value === 'amount' ? props.dispatch(sortByAmount()) : props.dispatch(sortByDate());
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);