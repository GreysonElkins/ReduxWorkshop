export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Date.now(), 
        todo: action.todo, 
        completed: false
      }];
    case 'FINISH_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = true
        } 
        return todo
      })
    default :
      return state;
  }
}