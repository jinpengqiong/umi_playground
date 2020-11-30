import {fakeAccountLogin} from '../services/api'
const DetailsModel = {
  namespace: 'details',
  state: {
    summaryData: [],
    modalVisible: false
  },
  effects: {
    *getSumData({ payload }, { call, put, select }) {
      const data = yield call(fakeAccountLogin);
      yield put({
        type: 'updateState',
        payload: {
          summaryData: data,
        },
      });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default DetailsModel;
