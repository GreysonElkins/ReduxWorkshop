import React from 'react'
import { connect } from 'react-redux'
import { finishToDo } from '../actions'
import '../index.css'

const ToDo = ({ id, todo, completed, finishToDo }) => {
  return (
    <li
      onClick={() => {
        finishToDo(id)
      }}
      className={completed ? "completed" : "not-completed"}
    >
      {todo}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  finishToDo: todo => dispatch( finishToDo(todo) )
})

// export default ToDo
export default connect(null, mapDispatchToProps)(ToDo)
