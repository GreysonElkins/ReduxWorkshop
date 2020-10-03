import React from 'react'
import { connect } from 'react-redux'
import ToDo from '../components/ToDo'

const ToDoList = ({ todos }) => {
  const listItems = todos.map((todo, i) => {
    return <ToDo 
      {...todo}
      key={`todo-${i}`}
    />
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)