import { allcate } from '@/services/api';

export default {
  namespace: 'feature',

  state: {
    list: [],
  },

  effects: {
    *gets({ payload }, { call, put }) {
      const response = yield call(allcate, payload);
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
