import { getCaseList } from '@/services/api';

export default {
  namespace: 'caselist',

  state: {
    list: [],
  },

  effects: {
    *gets({ payload }, { call, put }) {
      const response = yield call(getCaseList, payload);
      yield put({
        type: 'queryList',
        payload: response.data,
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
