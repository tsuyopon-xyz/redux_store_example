import { ADD_TODO } from '../../actions/constants';
import { addTodo } from '../../actions/todoActionCreator';

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
});

