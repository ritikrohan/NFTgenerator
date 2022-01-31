export const imageDimensionReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = state;
      const { value } = action;
      newState.height = value.height;
      newState.width = value.width;
      return newState;
    default:
      return state;
  }
};
