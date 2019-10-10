import store from '../../store';
import { todoReducer } from '../../reducers/todoReducer';

describe('store/index.jsのテスト', () => {
  it('stateの初期値は空配列である', () => {
    // reducerの第2引数にaction(=オブジェクト)を渡さないと、
    // action.typeが存在せず以下のエラーが発生するため、
    // ダミーのactionオブエクトをReducerに渡す
    // ↓↓↓
    // 「TypeError: Cannot read property 'type' of undefined」
    const mockAction = {};
    const defaultState = todoReducer(undefined, mockAction);

    // store生成時にtodoReducerをセットしていることを確認している。
    expect(store.getState()).toStrictEqual(defaultState);
  });
});