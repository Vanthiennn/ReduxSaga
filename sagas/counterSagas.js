import {
  INCREMENT,
  DECREMENT,
  DECREMENTLOADING,
  INCREMENTSAGA,
  GET_USER_FETCH,
  GET_USER_FETCH_SUCCESS,
  decreaseAction,
} from '../redux/actions';
import {incrementSagaSuccess} from '../redux/actions';
import {
  takeEvery,
  all,
  put,
  call,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';

export const delay = ms => new Promise(res => setTimeout(res, ms));

async function userFetch() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
}

function* workGetUserFetch() {
  console.log('get user fetch');
  const user = yield call(userFetch);
  yield put({type: GET_USER_FETCH_SUCCESS, user});
}

function* mySaga() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
}

function* helloSaga() {
  console.log('Hello Saga !');
}

function* increment() {
  console.log('this is increment');
}

function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  yield call(delay,2500)
  console.log('this is decrement');
  yield put(decreaseAction(1))
}
function* watchDecrement() {
  yield takeLatest(DECREMENTLOADING, decrement);
}

function* handleIncrementSaga() {
  // console.log('Waiting 2s')
  // Wait 2s
//   yield call(delay, 1000);
  // // Dispatch action success
  console.log('this is takeLeading ');
//   yield put(incrementSagaSuccess(1));
}
function* watchIncrementSaga() {
  yield takeEvery(INCREMENTSAGA, handleIncrementSaga);
}
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrement(),
    watchDecrement(),
    watchIncrementSaga(),
    mySaga(),
  ]);
}
