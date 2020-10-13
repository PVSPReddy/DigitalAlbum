import { combineReducers } from "redux";
import ExpenseYearListReducer from "./../UIModules/Expenses/DisplayExpenses/ExpenseYearList/ExpenseYearListReducer";
import EachMonthExpenseListReducer from "./../UIModules/Expenses/DisplayExpenses/ExpensesList/EachMonthExpenseListReducer";
import AddExpensePageReducer from "./../UIModules/Expenses/AddExpense/AddExpensePageReducer";

export const RootReducer = combineReducers({
    ExpenseYearListReducer,
    EachMonthExpenseListReducer,
    AddExpensePageReducer
});