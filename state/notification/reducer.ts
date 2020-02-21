export const initialState = {
  msg: null
};

export const reducer = (state = initialState, action: any) => {
  return {
    ...state,
    msg: action.msg
  };
};
