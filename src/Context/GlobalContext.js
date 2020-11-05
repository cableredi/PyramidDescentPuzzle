import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { STORE } from '../STORE';

const initialState = {
  questions: {},
  currentQuestion: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function setQuestions() {
    dispatch({
      type: "SET_QUESTIONS",
      payload: STORE
    });
  }

  function setCurrentQuestion() {
    dispatch({
      type: "SET_CURRENT_QUESTION",
    });
  }

  function updateCurrentQuestion() {
    dispatch({
      type: "UPDATE_CURRENT_QUESTION",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        questions: state.questions,
        setQuestions,
        currentQuestion: state.currentQuestion,
        setCurrentQuestion,
        updateCurrentQuestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
