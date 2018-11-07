// ----------------- Expenses Reducer ---------------
const expensesReducerDefaultState = [];


export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates       // updates is object so we need to use spread to add its properties to expense
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};