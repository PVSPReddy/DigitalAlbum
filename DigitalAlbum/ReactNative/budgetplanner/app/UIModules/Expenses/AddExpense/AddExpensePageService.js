import {
  PostExpenditureURL,
  mainURL,
  successStatusCode,
} from '../../../Constants/URLConstants';
import {
  getAddExpense,
  getAddExpenseFailure,
  getAddExpenseSuccess,
} from './AddExpensePageActions';

export function fetchAddExpense(expensesRequestParms) {
  return async (dispatchAddExpense) => {
    dispatchAddExpense(getAddExpense());
    try {
      const url = mainURL + PostExpenditureURL;
      const postData = {
        method_name: 'addNewBudgetData',
        service_request_data: {
          dateOfPurchase: expensesRequestParms.dateOfPurchase,
          nameOfPurchase: expensesRequestParms.nameOfPurchase,
          expenditureType: expensesRequestParms.expenditureType,
          paidBy: expensesRequestParms.paidBy,
          amountSpend: expensesRequestParms.amountSpend,
          details: expensesRequestParms.details,
          dateCreated: new Date().toString(),
        },
      };

      fetch(url, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Accept-Encoding': ['gzip', 'deflate', 'br'],
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          console.log(responseJSON);
          if (responseJSON.status_code === successStatusCode) {
            dispatchAddExpense(getAddExpenseSuccess({}));
          }
        })
        .catch((error) => {
          dispatchAddExpense(
            getAddExpenseFailure({
              errorMessage: 'Catch Block triggered for fetch',
            }),
          );
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      dispatchAddExpense(
        getAddExpenseFailure({errorMessage: 'Catch Block triggered'}),
      );
    }
  };
}
