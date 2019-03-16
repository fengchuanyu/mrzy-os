import { addDoc } from '@/services/api';

export default {
  namespace: 'adddoc',

  state: {
    list: [],
  },

  effects: {
    *add({ payload }, { call, put }) {
      const response = yield call(addDoc, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
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
