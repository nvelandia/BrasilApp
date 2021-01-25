import { combineReducers } from 'redux'
import { langReducer } from 'react-redux-multilang'

import home from './reducers/home'
import step1 from './reducers/step1'

export default combineReducers({
    lang: langReducer, home, step1
});
