import { addoffice,deleteOffice } from '@/services/api';

export default {
  namespace: 'addoffice',

  state: {
    list: [],
  },

  effects: {
    *add({ payload }, { call, put }) {
      const response = yield call(addoffice, payload);
      yield put({
        type: 'queryList',
        payload
      });
    },
    *delete({ payload }, { call, put }) {
      const response = yield call(deleteOffice, payload);
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
