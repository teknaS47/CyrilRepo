import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk'
import rootReducer from '../redux/root-reducer'

const middleware=[reduxThunk]
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middleware));
export default store;