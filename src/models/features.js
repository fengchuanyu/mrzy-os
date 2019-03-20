import { allills,change } from '@/services/api';

export default {
  namespace: 'features',

  state: {
    list: [],
  },

  effects: {
    *gets({ payload }, { call, put }) {
      const response = yield call(allills, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },  
    *change({ payload }, { call, put }) {
      const response = yield call(change, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    }  
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
