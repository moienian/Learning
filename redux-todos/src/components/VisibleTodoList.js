import { connect } from "react-redux";
import TodoList from "./TodoList";
import { VisibilityFilters } from "../actions/filters";
import { toggleTodo } from "../actions/todos";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter: ", filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
