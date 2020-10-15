import {
  FAILURE,
  INACTIVE,
  LOADING,
  SUCCESS,
} from '../../../../Constants/URLConstants';
import {
  GET_YEARS_MONTHS_DETAILS,
  GET_YEARS_MONTHS_DETAILS_SUCCESS,
  GET_YEARS_MONTHS_DETAILS_FAILURE,
  GET_YEARS_MONTHS_DETAILS_RESET,
} from './ExpenseYearListActions';

const initialState = {
  serviceState: INACTIVE,
  loaderVisibility: false,
  listItems: [],
  errorMessage: '',
};

const ExpenseYearListReducer = (state = initialState, action) => {
  console.log(action);
  state = {
    ...state,
    serviceState: INACTIVE,
    errorMessage: '',
    loaderVisibility: false,
  };
  switch (action.type) {
    case GET_YEARS_MONTHS_DETAILS:
      state = {...state, serviceState: LOADING, loaderVisibility: true};
      break;
    case GET_YEARS_MONTHS_DETAILS_SUCCESS:
      state = {...state, serviceState: SUCCESS, listItems: action.payload};
      break;
    case GET_YEARS_MONTHS_DETAILS_FAILURE:
      state = {
        ...state,
        serviceState: FAILURE,
        errorMessage: action.payload.message,
      };
      break;
    case GET_YEARS_MONTHS_DETAILS_RESET:
      state = {...state, listItems: []};
      break;
  }
  return state;
};

export default ExpenseYearListReducer;
