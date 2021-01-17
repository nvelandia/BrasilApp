import { combineReducers } from 'redux'
import { langReducer } from 'react-redux-multilang'

import home from './reducers/home'

export default combineReducers({
    lang: langReducer, home
});
