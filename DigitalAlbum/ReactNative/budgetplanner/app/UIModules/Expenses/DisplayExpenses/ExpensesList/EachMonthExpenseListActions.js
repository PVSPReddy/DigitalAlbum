import { PostGetAvailableMonthlyExpenseData, mainURL, successStatusCode } from "../../../../Constants/URLConstants";

export const GET_EACH_MONTH_EXPENSE_LIST = 'GET_EACH_MONTH_EXPENSE_LIST';
export const GET_EACH_MONTH_EXPENSE_LIST_SUCCESS = 'GET_EACH_MONTH_EXPENSE_LIST_SUCCESS';
export const GET_EACH_MONTH_EXPENSE_LIST_FAILURE = 'GET_EACH_MONTH_EXPENSE_LIST_FAILURE';

export const getEachMonthExpenseList = (pageTitle) => ({ type: GET_EACH_MONTH_EXPENSE_LIST, payload: pageTitle });
export const getEachMonthExpenseListSuccess = (successData) => ({ type: GET_EACH_MONTH_EXPENSE_LIST_SUCCESS, payload: successData });
export const getEachMonthExpenseListFailure = (failureReport) => ({ type: GET_EACH_MONTH_EXPENSE_LIST_FAILURE, payload: failureReport });

export function fetchEachMonthExpenseList(expensesRequestParms) {
    return async dispatchEachMonthExpenseList => {
        dispatchEachMonthExpenseList(getEachMonthExpenseList(expensesRequestParms.sheetName));
        try {
            const url = mainURL + PostGetAvailableMonthlyExpenseData;
            const postData = {
                "method_name": "addNewBudgetData",
                "service_request_data":
                {
                    "month": expensesRequestParms.sheetName,
                    "year": expensesRequestParms.year
                }
            }

            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    "Accept-Encoding": ["gzip", "deflate", "br"],
                    "Connection": "keep-alive",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            }).then((response) => {
                return response.json();
            }).then((responseJSON) => {
                if (responseJSON.status_code === successStatusCode) {
                    var totalAmount = 0;
                    responseJSON.response_data.map(item => {
                        var floatValue = parseFloat(item.amountSpend);
                        if (!isNaN(floatValue)) {
                            console.log(totalAmount);
                            totalAmount = totalAmount + parseFloat(item.amountSpend);
                        }
                    });
                    dispatchEachMonthExpenseList(getEachMonthExpenseListSuccess({
                        expenseListItems: responseJSON.response_data,
                        pageTitle: expensesRequestParms.sheetName + "(" + totalAmount + ")"
                    }));
                }
            }).catch((error) => {
                dispatchEachMonthExpenseList(getEachMonthExpenseListFailure({ errorMessage: "Catch Block triggered for fetch" }));
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
            dispatchEachMonthExpenseList(getEachMonthExpenseListFailure({ errorMessage: "Catch Block triggered" }));
        }
    }
}
