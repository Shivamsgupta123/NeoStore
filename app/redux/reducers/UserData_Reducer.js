import { addUpdateData } from '../actions/UserData_Action';
export function changeData(state, action) {
    switch (action.type) {
        case 'ADD_UPDATE_DATA':
            return { ...state, ...action.data }
        case 'ADD_USER-DATA':
            return { ...state, ...action.data }
        default:
            return state
    }
}