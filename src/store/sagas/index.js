import { all, takeLatest } from 'redux-saga/effects';
import { Types as UserTypes } from '../ducks/users';
import { addUser } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)]);
}

/**
 * takeLatest: Se o usuario clicar varias vezes e disparar varias vezes, ele pega apenas
 * a ultima requisição
 * takeEvery: Faz o inverso do latest
 */
