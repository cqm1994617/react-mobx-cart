import { observable, computed } from 'mobx';

class AppState {
  @observable todos = [];
  addTodo(text) {
    this.todos.push(text);
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}
const newState = new AppState();
export default newState;
