import {combineReducers} from 'redux';
import DashBoardReducer from '../src/screens/dashboard/reducer/dashboardReducer';
import ApplyReducer from '../src/screens/apply/reducer/applyReducer';
import DocReducer from '../src/screens/documents/reducer/docReducer';

export default combineReducers({
   dashboardModel: DashBoardReducer,
   adminModel: ApplyReducer,
   docModel: DocReducer
});