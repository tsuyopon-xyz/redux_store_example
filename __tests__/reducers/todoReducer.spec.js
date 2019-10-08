import { todoReducer } from '../../reducers/todoReducer';
import { addTodo, deleteTodo } from '../../actions/todoActionCreator';

describe('todoReducerのテスト', () => {
  it('action.type === ADD_TODOのとき、Todo1件追加した配列を返す', () => {
    const dummyText = 'ダミーテキスト'
    const action = addTodo(dummyText);
    const initialState = [];
    const newState = todoReducer(initialState, action);

    expect(newState).toStrictEqual([dummyText]);
  });

  it('action.type === DELETE_TODOのとき、index番号の要素を削除した配列を返す', () => {
    // テスト動作確認用にダミーデータを3件用意
    const prefixText = 'テスト'
    let state = [];
    for (let i = 0; i < 3; i++) {
      const text = prefixText + i;
      const action = addTodo(text);
      state = todoReducer(state, action);
    }

    expect(state).toStrictEqual([
      `${prefixText}0`,
      `${prefixText}1`,
      `${prefixText}2`,
    ]);

    // インデックス番号1を指定して、
    // 「action.type === DELETE_TODO」でreducerを実行
    const targetIndex = 1;
    const deleteAction = deleteTodo(targetIndex);
    state = todoReducer(state, deleteAction);
    expect(state).toStrictEqual([
      `${prefixText}0`,
      `${prefixText}2`,
    ]);
  });
});

