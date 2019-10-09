import { createStore } from 'redux';
import {
  addTodo
} from '../actions/todoActionCreator'
import {
  todoReducer
} from '../reducers/todoReducer'

const store = createStore(todoReducer);

store.subscribe((a) => {
  console.log('dispatchが実行された更新された');
});

const addAction = addTodo('ダミーテキスト');
store.dispatch(addAction);