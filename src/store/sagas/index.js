import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([]);
}

/**
 * takeLatest: Se o usuario clicar varias vezes e disparar varias vezes, ele pega apenas
 * a ultima requisição
 * takeEvery: Faz o inverso do latest
 */
