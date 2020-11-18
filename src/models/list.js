const ListModel = {
  namespace: 'list',
  state: {
    isCollapsed: true
  },
  effects: {
    *switchMenus({ payload }, { call, put, select }) {
      const { isCollapsed } = payload;
      yield put({
        type: 'updateState',
        payload: {
          isCollapsed
        }
      })
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
export default ListModel;
