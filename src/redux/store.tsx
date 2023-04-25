import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './feature/alert';


const rootReducer = combineReducers({
    orders: ordersReducer,
    customers: customersReducer,
    products: productsReducer,
    common: commonReducer,
});


const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

