export const INCREMENT = 'INCREMENT' 
export const DECREMENT = 'DECREMENT'
export const DECREMENTLOADING = 'DECREMENTLOADING'
export const INCREMENTSAGA = 'INCREMENTSAGA'
export const INCREMENTSAGASUCCESS = 'INCREMENTSAGASUCCESS'

// Example Fetch Api
export const GET_USER_FETCH = 'GET_USER_FETCH'
export const GET_USER_FETCH_SUCCESS = 'GET_USER_FETCH_SUCCESS'

export const getUsersFetch = () => ({type: GET_USER_FETCH})
// code rut gon : () => {
//     return {
//         type: GET_USER_FETCH
//     }
// }

export const increaseAction = (step) => {
    return {
        type:INCREMENT,
        payload:step
    }
}

export const decreaseLoading = () => ({type:DECREMENTLOADING})

export const decreaseAction = (step) => {
    return {
        type:DECREMENT ,
        payload:step
    }
}

export const incrementSaga = () => {
    return {
        type:INCREMENTSAGA
    }
}

export const incrementSagaSuccess = (step) => {
    return {
        type:INCREMENTSAGASUCCESS,
        payload:step
    }
}