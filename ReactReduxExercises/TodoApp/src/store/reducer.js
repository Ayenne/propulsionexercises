const initialState = {
    todos : [{
        content: 'buy groceries',
        completed: false,
    }, {
        content: 'make dinner',
        completed: false,
    }, {
        content: 'go to sleep',
        completed: false,
    }],
        filter: (x) => { return true; }
        
  };


  const reducer = (state = initialState, action) => {
    const todos = state.todos.splice(0);
    let filter = state.filter;
    switch (action.type) {
        case 'ADD': {
            todos.push({content: action.payload, completed: false});
        } break;

        case 'DELETE': {
            const index = todos.indexOf(action.payload);
            if (index !== -1) todos.splice(index, 1);
        } break;

        case 'TOGGLE': {
            const index = todos.indexOf(action.payload);
            if (index !== -1) {
                if (todos[index].completed) todos[index].completed = false;
                else todos[index].completed = true;
            }
        } break;

        case 'FILTER': {
            console.log('filter')
            filter = action.payload;
        } break;

        default: {
            
        }
    }
    return {
        todos: todos,
        filter: filter,
    };
  };
  
  export default reducer;