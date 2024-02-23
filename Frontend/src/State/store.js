import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import productReducer from "./Admin/Product/Reducer"
import ReviewReducer from "./Review/Reducer"
import adminCustomerReducer from "./Admin/Customer/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    product:customerProductReducer,
    review:ReviewReducer,

    adminsProduct:productReducer,
    adminsOrder:adminOrderReducer,
    adminsCustomer:adminCustomerReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))