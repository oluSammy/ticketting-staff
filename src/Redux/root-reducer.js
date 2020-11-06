import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import AddTicketReducer from './Add-Ticket/addTicket.reducer';
import pendingReducer from './pending/pending.reducer';
import resolvedReducer from './Resolved/resolved.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    addTicket: AddTicketReducer,
    pending: pendingReducer,
    resolved: resolvedReducer
});

export default persistReducer(persistConfig, rootReducer);