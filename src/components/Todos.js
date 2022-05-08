import React from 'react'
import '../styles.css/todos.css'
import { ACTIONS } from './App'
import trash from '../assets/icons/icons8-trash.svg'
import done from '../assets/icons/done.svg'
function Todos({todos, dispatch}) {
  return (
    <div className='todo'>
        <div className='todo-part' onClick={() => dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:todos.id}})}>
            <div className='todo-content'>
                <img src={done} className={`done-icon ${todos.complete ? 'show' : ''}`} />
                <span className={`todo-text ${todos.complete ? 'done' : ''}`}>{todos.name}</span>
            </div>
        </div>
        <div className='dlt-part'>
            <button className='dlt-button' onClick={() => dispatch({type:ACTIONS.DELETE_TODO, payload: {id:todos.id}})}>
                <img src={trash} className='trash-icon' />
                <span>Delete</span>
            </button>
        </div>
    </div>
  )
}

export default Todos
