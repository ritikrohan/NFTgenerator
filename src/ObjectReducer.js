const objectReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const newState = [...state];
      const { name, parameter } = action;
      newState.find((planet) => name === planet.name).height = action.parameter;
      return newState;
    default:
      return state;
  }
};

export default objectReducer;
