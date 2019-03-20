import { casesend } from '@/services/api';

export default {
    namespace: 'casesend',
  
    state: {
      list: [],
    },
  
    effects: {
      *add({ payload }, { call, put }) {
        const response = yield call(casesend, payload);
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
  