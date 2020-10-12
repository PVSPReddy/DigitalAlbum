import { FAILURE, INACTIVE, LOADING, SUCCESS } from "../../../../Constants/URLConstants";
import { GET_EACH_MONTH_EXPENSE_LIST, GET_EACH_MONTH_EXPENSE_LIST_SUCCESS, GET_EACH_MONTH_EXPENSE_LIST_FAILURE } from "./EachMonthExpenseListActions";

const initialState = {
    pageTitle: "Expenses",
    serviceState: INACTIVE,
    loaderVisibility: false,
    expenseListItems: [],
    errorCode: "",
};

const EachMonthExpenseListReducer = (state = initialState, action) => {
    console.log(action);
    state = {...state, serviceState: INACTIVE, errorCode:"", loaderVisibility: false}
    switch (action.type) {
        case GET_EACH_MONTH_EXPENSE_LIST:
            state = {...state, pageTitle:action.payload, serviceState: LOADING, loaderVisibility: true}
            break;
        case GET_EACH_MONTH_EXPENSE_LIST_SUCCESS:
            state = {...state, serviceState: SUCCESS, ...action.payload}
            break;
        case GET_EACH_MONTH_EXPENSE_LIST_FAILURE:
            state = {...state, serviceState: FAILURE, errorCode:action.payload.message}
            break;
    }
    return state;
}

export default EachMonthExpenseListReducer;