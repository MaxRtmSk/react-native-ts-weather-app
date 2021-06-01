import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
//Actions
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './actions';





// import { devToolsEnhancer } from 'redux-devtools-extension';

// export const store = createStore(rootReducer, devToolsEnhancer({}))








  
// import { combineReducers } from "redux";
// import { todoReducer } from "./todoReducer";

// export const rootReducer = combineReducers({
//   todo: todoReducer,
// })

// export type RootState = ReturnType<typeof rootReducer>