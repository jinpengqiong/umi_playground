const DetailsModel = {
  namespace: 'details',
  state: {
    sumData: ['111111dsadad'],
    audioData:[]
  },
  effects: {
    *getSumData({ payload }, { call, put, select }) {

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
