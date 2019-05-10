import { call, select, put } from "redux-saga/effects";
import { Creators as UserActions } from "../ducks/users";
import { Creators as ModalActions } from "../ducks/modal";
import api from "../../services/api";

export function* addUser(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.get, `/users/${user}`);

    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    );

    if (isDuplicated) {
      yield put(UserActions.addUserFailure("Usuário Duplicado"));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        cordinates: action.payload.cordinates
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure("Erro ao buscar usuario"));
  } finally {
    yield put(ModalActions.hideModal());
  }
}
