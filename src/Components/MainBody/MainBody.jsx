
import './MainBody.css'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'
import TodoFrom from '../TodoFrom/TodoFrom'
import SubHead from '../SubHead/SubHead'
import Quote from '../Quote/Quote'


const MainBody = ({TodoContent}) => {

    return (
        <div className='main__body'>
            <div className='Quote'>
            <Quote/>
            </div>
           <div className='todo__list'>
           <h4 className='me'><TodoFrom/></h4>
           {
               TodoContent.map(todo =>{
                   return <ToDoList key={todo.id} todo={todo}/>
               })
           }
           </div> 
           <div className='subHead'>
           <SubHead/>
           </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
       TodoContent:state.Todo.TODOLIST
    }
}


export default connect(mapStateToProps)(MainBody)
