
import Types from './Types'
import { v4 as uuidv4 } from 'uuid';
// import {PRIORITIES} from '../PRIORITIES'

const initialState = {
  TODOLIST:[],
  Priorities : []
}




const TodoReducer = (state = initialState, action) => {
   switch(action.type){
       case Types.Add_ToDo:
           const newTodo = {
               list:action.payload,
               id:uuidv4(),
               finished:false
           }
           const AddMe = [...state.TODOLIST, newTodo]
        return{
          ...state,
          TODOLIST: AddMe
        }
     case Types.Remove_Todo:
         const removed_Item = state.TODOLIST.filter((item) => item.id !== action.payload.id)
         return{
             ...state,
             TODOLIST:removed_Item 
         }  
       case Types.Edit_Todo: 

       const updatedTodo = state.TODOLIST.map((item) =>{
       if(item.id === action.payload.id){
           return{
               ...item,
               list:action.payload.list
           }
       }
       return item
    }) 

       return{
           ...state,
           TODOLIST:updatedTodo
       }  
case Types.Priority:
  return{
  ...state,
  Priorities:[...state.Priorities, action.payload]
  }
 case Types.Important:
     const removeMe = state.Priorities.filter((important) => important.id !== action.payload.id)
     return{
         ...state,
         Priorities:removeMe
     } 
       default:
       return state
   }
}

export default TodoReducer
