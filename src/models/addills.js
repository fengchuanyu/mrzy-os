import { addills } from '@/services/api';

export default {
  namespace: 'addills',

  state: {
    list: [],
  },

  effects: {
    *add({ payload }, { call, put }) {
      const response = yield call(addills, payload);
      yield put({
        type: 'queryList',
        payload
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
