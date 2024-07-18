// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onclickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onclickDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
