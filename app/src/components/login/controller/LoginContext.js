import { createContext } from 'react'

export const LoginContext = createContext();

// export const init = [{
//     login: {
//         username: '',
//         password: ''
//     },
//     register: {
//         name: '',
//         email: '',
//         username: '',
//         password: '',
//         confirm_pass: '',
//     }
// }]

export const init = [{}]

export function LoginReducer(state, action){
    console.log(action)
    return action.credentials
}

export function fieldReducer(state, action){
    return {
        ...state,
        [`${action.fieldName}`] : `${action.fieldValue}`
    }
}

