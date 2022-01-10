import {useState} from 'react'
import {BsCheck2Square, BsSquare} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlinePlusSquare, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import './ToDoList.css'
import { connect } from 'react-redux'
import {RemoveTodoItem, EditTodoItem, ImportantTodoItem} from '../Store/TodoAction'
import { v4 as uuidv4 } from 'uuid';

const ToDoList = ({todo, RemoveTodoItem,EditTodoItem,ImportantTodoItem}) => {
 const [finished, setFinished] = useState(false)
 const [edit, setEdit] = useState(false)
 const [disableMe, setDisableMe] = useState(false)
 const [editable, setEditable] = useState(todo.list)
  const handleFinishedTodo = () =>{
  setFinished(!finished)
  }

  const handleEditable = () =>{
      setEdit(!edit)
  }

  const handleImportantThings = () =>{
        
    ImportantTodoItem({
        veryImportant:todo.list,
        id:uuidv4()
    }) 
      setDisableMe(!disableMe)
  }

    return (
        <div className='list__container'>
        <span className='list__item'> 
         <span onClick={handleFinishedTodo}>
             {finished ? <BsCheck2Square/> : <BsSquare/>}
        </span> 
        <span className={finished ? "input__text":""}>
            {edit ?  <span className='ed'>
                         <input type="text" className='main__todo__input' value={editable} onChange={(event) => setEditable(event.target.value)}/>
                 </span> : <p className='main__todo'>{todo.list}</p>}
                 </span>
                 </span>

        <div>
                 <span> 
                <button onClick={handleImportantThings} className='btnS' disabled={disableMe} >
                {disableMe ? <AiFillStar/> : <AiOutlineStar/>}
                    </button> 
                 {edit ? <AiOutlinePlusSquare onClick={() =>{
                     EditTodoItem({
                     ...todo,
                     list:editable
                 })
                setEdit(!edit)
                }}/> : <BiEditAlt  onClick={handleEditable}/>} 
                 </span>
                 <span>
                     <AiOutlineDelete onClick={() =>RemoveTodoItem(todo)}/>
                 </span>
                 </div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        RemoveTodoItem:item=>dispatch(RemoveTodoItem(item)),
        EditTodoItem:item => dispatch(EditTodoItem(item)),
        ImportantTodoItem:item => dispatch(ImportantTodoItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ToDoList)
