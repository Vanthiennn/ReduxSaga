import {INCREMENT, DECREMENT, INCREMENTSAGA, INCREMENTSAGASUCCESS, GET_USER_FETCH_SUCCESS} from './actions';

const initState = {
  times: 0,
  status: '',
  user:[]
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      state.times += action.payload;
      return {...state};
    case DECREMENT:
      state.times -= action.payload;
      return {...state};
    case INCREMENTSAGA:
      state.status = 'loading';
      return {...state};
    case INCREMENTSAGASUCCESS:
      state.times += action.payload;
      return {...state};
    case GET_USER_FETCH_SUCCESS:
      state.user = action.user
      return {...state}
    default:
      return state;
  }
};

export default counterReducer;
