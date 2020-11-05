const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };

    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: 0 };

    case "UPDATE_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    default:
      return state;
  }
};

export { GlobalReducer };