import { combineReducers } from 'redux'
import handler  from './IncDec'

const rootReducer= combineReducers({
    counter: handler
})

export default rootReducer