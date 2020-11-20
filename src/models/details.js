const DetailsModel = {
  namespace: 'details',
  state: {
    sumData: [],
    modalVisible: false,
    modalDraggableDisabled: true,
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
