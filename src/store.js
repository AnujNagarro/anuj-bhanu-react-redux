import {createStore} from 'redux';
import CombinedReducer from './reducer';

export default createStore(CombinedReducer);