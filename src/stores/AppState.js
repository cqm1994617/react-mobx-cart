import { observable, computed, autorun } from 'mobx';

class AppState {
  @observable todos = [];
  addTodo(text) {
    this.todos.push(text);
  }
  editTodo(index, value) {
    this.todos[index] = value;
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
  @computed get total() {
    return this.todos.length;
  }
}
const newState = new AppState();

export default newState;
