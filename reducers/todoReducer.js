import {
  ADD_TODO,
  DELETE_TODO
} from '../actions/todoActionCreator';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.text
      ];
    case DELETE_TODO:
      return state.filter((text, index) => {
        return action.index !== index;
      });
    default:
      return state;
  }
};

