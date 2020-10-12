import { combineReducers } from "redux";
import ExpenseYearListReducer from "./../UIModules/Expenses/DisplayExpenses/ExpenseYearList/ExpenseYearListReducer";
import EachMonthExpenseListReducer from "./../UIModules/Expenses/DisplayExpenses/ExpensesList/EachMonthExpenseListReducer";

export const RootReducer = combineReducers({
    ExpenseYearListReducer,
    EachMonthExpenseListReducer
});