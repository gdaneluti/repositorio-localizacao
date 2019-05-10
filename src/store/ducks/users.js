/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE",
  REMOVE: "users/REMOVE"
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: []
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addUserRequest: (user, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, cordinates }
  }),
  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),
  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user }
  })
};
