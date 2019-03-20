import { addMessage } from '@/services/api';

export default {
  namespace: 'addmessage',

  state: {
    list: [],
  },

  effects: {
    *add({ payload }, { call, put }) {
      const response = yield call(addMessage, payload);
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
