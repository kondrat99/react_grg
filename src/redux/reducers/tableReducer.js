

const initialState =[
  {id:1, firstName: 'Pavel', lastName: 'Kondratyev', email: 'pasha2020@mail.ru'},
  {id:2, firstName: 'Julia', lastName: 'Ivanova', email: 'Julia2020@mail.ru'}
]





const tableReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state,{
        id: action.id,
        firstName: action.firstName, 
        lastName: action.lastName, 
        email: action.email,
        editing: false
      }]
      case 'DELETE_ITEM':
        return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}



export {tableReducer} ;