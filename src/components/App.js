import React, {useState, useReducer} from 'react'
import '../styles.css/app.css'
import '../styles.css/responsive.css'
import Todos from './Todos'
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) =>{
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newtodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo=>{
        return todo.id === action.payload.id ? {...todo, complete: !todo.complete} : todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo=>{
        return todo.id !== action.payload.id
      })
    default:
      return todos
  }
}

const newtodo = (name) =>{
  return {id: Date.now(), name: name, complete: false}
}
function Todo() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    if((/\w+/g).test(name)){
      dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
      setName('')
    }
    else{
      return
    }
  }
  return (
    <div className='app'>
      <form>
        <input
          type={'text'}
          placeholder='Type your activity'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>add todo</button>
      </form>
      {
        todos.map(todo=>{
          return <Todos key={todo.id} todos={todo} dispatch={dispatch} />
        })
      }
    </div>
  )
}

export default Todo
