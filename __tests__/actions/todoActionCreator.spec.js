import {
  ADD_TODO,
  DELETE_TODO,
  addTodo,
  deleteTodo
} from '../../actions/todoActionCreator';

describe('todoActionCreatorのテスト', () => {
  it('addTodo関数', () => {
    const dummyText = 'ダミーテキスト'
    const action = addTodo(dummyText);

    expect( action ).toStrictEqual(
      {
        type: ADD_TODO,
        text: dummyText
      }
    );
  });

  it('deleteTodo関数', () => {
    const indexValue = 1;
    const action = deleteTodo(indexValue);

    expect( action ).toStrictEqual(
      {
        type: DELETE_TODO,
        index: indexValue
      }
    );
  });
});

