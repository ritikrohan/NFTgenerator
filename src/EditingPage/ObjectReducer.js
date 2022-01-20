export const objectReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = [...state];
      newState.find((obj) => action.nameToFind === obj.name)[
        action.valueToChange
      ] = action.currentSlide;
      return newState;

    case "add":
      const newState1 = action.payload;
      return newState1;
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

export const totalElementsReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = state;
      const { value } = action;
      newState.value = value;
      return newState;
    default:
      return state;
  }
};
