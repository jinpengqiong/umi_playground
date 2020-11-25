const DetailsModel = {
  namespace: 'details',
  state: {
    summaryData: [],
    modalVisible: false
  },
  effects: {
    *getSumData({ payload }, { call, put, select }) {},
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
