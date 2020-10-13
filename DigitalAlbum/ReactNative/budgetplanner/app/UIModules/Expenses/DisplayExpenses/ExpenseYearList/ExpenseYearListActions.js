import { GetAvailableYearsMonths, mainURL, successStatusCode } from "../../../../Constants/URLConstants";

export const GET_YEARS_MONTHS_DETAILS = 'INIT_GET_YEARS_MONTHS_DETAILS';
export const GET_YEARS_MONTHS_DETAILS_SUCCESS = 'GET_YEARS_MONTHS_DETAILS_SUCCESS';
export const GET_YEARS_MONTHS_DETAILS_FAILURE = 'GET_YEARS_MONTHS_DETAILS_FAILURE';
export const GET_YEARS_MONTHS_DETAILS_RESET = 'GET_YEARS_MONTHS_DETAILS_RESET';

export const getYearsMonthsData = () => ({ type: GET_YEARS_MONTHS_DETAILS });
export const getYearsMonthsDataSuccess = (successData) => ({ type: GET_YEARS_MONTHS_DETAILS_SUCCESS, payload: successData });
export const getYearsMonthsDataFailure = (failureReport) => ({ type: GET_YEARS_MONTHS_DETAILS_FAILURE, payload: failureReport });
export const getYearsMonthsDataReset = () => ({ type: GET_YEARS_MONTHS_DETAILS_RESET });

export function fetchYearsData() {
    return async dispatchYearsData => {
        dispatchYearsData(getYearsMonthsData());
        try {
            const url = mainURL + GetAvailableYearsMonths;

            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: '*/*',
                    "Accept-Encoding": ["gzip", "deflate", "br"],
                    "Connection": "keep-alive",
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.status_code === successStatusCode) {
                    const _listItemsData = responseJSON.response_data;
                    var listItemsData = [];
                    for (let i = 0; i < _listItemsData.length; i++) {
                        const eachListItem = _listItemsData[i];
                        listItemsData.push({ ...eachListItem, isOpen: false });
                    }
                    dispatchYearsData(getYearsMonthsDataSuccess(listItemsData));
                }
            }).catch((error) => {
                dispatchYearsData(getYearsMonthsDataFailure({errorMessage: "Catch Block triggered for fetch"}));
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
            dispatchYearsData(getYearsMonthsDataFailure({errorMessage: "Catch Block triggered"}));
        }
    }
}
