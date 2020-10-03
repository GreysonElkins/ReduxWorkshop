export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const finishToDo = id => ({
  type: 'FINISH_TODO',
  id
})