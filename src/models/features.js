import { allills } from '@/services/api';

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
