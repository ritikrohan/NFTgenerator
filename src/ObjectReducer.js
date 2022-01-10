export const objectReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = [...state];
      newState.find((obj) => action.nameToFind === obj.name)[
        action.valueToChange
      ] = action.currentSlide;
      return newState;
    default:
      return state;
  }
};

export const selectionReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = state;
      const { name } = action;
      newState.name = name;
      return newState;
    default:
      return state;
  }
};
