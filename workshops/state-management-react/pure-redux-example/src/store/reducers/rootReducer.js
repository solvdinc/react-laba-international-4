import { combineReducers } from 'redux';
import orders from './orders';
import selectedOrders from './selectedOrders';

export default combineReducers({ orders, selectedOrders });
