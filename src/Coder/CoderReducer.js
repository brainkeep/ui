import { combineReducers } from 'redux'
import CoderInfoReducer from './reducers/CoderInfoReducer'

const CoderReducer = combineReducers({
    coder_info: CoderInfoReducer
})

export default CoderReducer