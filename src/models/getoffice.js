import { getOffice } from '@/services/api';

export default {
  namespace: 'getoffice',

  state: {
    list: [],
  },

  effects: {
    *gets({ payload }, { call, put }) {
      const response = yield call(getOffice, payload);
      let data = response.data
      
      yield put({
        type: 'queryList',
        payload: Array.isArray(data) ? data : [],
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
