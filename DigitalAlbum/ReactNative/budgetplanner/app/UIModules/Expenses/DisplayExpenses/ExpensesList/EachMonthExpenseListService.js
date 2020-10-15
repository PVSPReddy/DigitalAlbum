import {
  PostGetAvailableMonthlyExpenseData,
  mainURL,
  successStatusCode,
} from '../../../../Constants/URLConstants';
import {
  getEachMonthExpenseList,
  getEachMonthExpenseListFailure,
  getEachMonthExpenseListSuccess,
} from './EachMonthExpenseListActions';

export function fetchEachMonthExpenseList(expensesRequestParms) {
  return async (dispatchEachMonthExpenseList) => {
    dispatchEachMonthExpenseList(
      getEachMonthExpenseList(expensesRequestParms.sheetName),
    );
    try {
      const url = mainURL + PostGetAvailableMonthlyExpenseData;
      const postData = {
        method_name: 'getDatabyMonth',
        service_request_data: {
          month: expensesRequestParms.sheetName,
          year: expensesRequestParms.year,
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
          if (responseJSON.status_code === successStatusCode) {
            var totalAmount = 0;
            responseJSON.response_data.map((item) => {
              var floatValue = parseFloat(item.amountSpend);
              if (!isNaN(floatValue)) {
                console.log(totalAmount);
                totalAmount = totalAmount + parseFloat(item.amountSpend);
              }
            });
            // console.log(responseJSON.response_data);
            dispatchEachMonthExpenseList(
              getEachMonthExpenseListSuccess({
                expenseListItems: responseJSON.response_data,
                pageTitle:
                  expensesRequestParms.sheetName + '(' + totalAmount + ')',
              }),
            );
          }
        })
        .catch((error) => {
          dispatchEachMonthExpenseList(
            getEachMonthExpenseListFailure({
              errorMessage: 'Catch Block triggered for fetch',
            }),
          );
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      dispatchEachMonthExpenseList(
        getEachMonthExpenseListFailure({errorMessage: 'Catch Block triggered'}),
      );
    }
  };
}
