import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  exploreRequest: null,
  exploreAccept: ['response'],
  exploreRequestFail: null,
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { data: [], loading: false };

/* Reducers */
export const exploreRequest = state => ({ ...state, loading: true });
export const exploreAccept = (state, action) => ({
  ...state,
  data: action.response,
  loading: false,
});
export const exploreRequestFail = state => ({ ...state });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.EXPLORE_REQUEST]: exploreRequest,
  [Types.EXPLORE_ACCEPT]: exploreAccept,
  [Types.EXPLORE_REQUEST_FAIL]: exploreRequestFail,
});
