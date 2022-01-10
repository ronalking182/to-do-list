import {useState} from 'react'
import './TodoFrom.css'
import { connect } from 'react-redux'
import {AddTodoItem, } from '../Store/TodoAction'


const TodoFrom = ({AddTodoItem,}) => {
    const [inputValue, setInputValue] = useState("")


const HandleChangeInput = (e) =>{
    setInputValue(e.target.value)

}

const SubmitHandler = (event) =>{
event.preventDefault()
if(!inputValue){
    return
}
AddTodoItem(inputValue)
setInputValue("")
}


    return (
        <form className='form__container' onSubmit={SubmitHandler}>
            <span className='formY'>
            <input className='form__input'  onChange={HandleChangeInput} value={inputValue}  type="text"/>
            <button className='btn'>Add</button>
            </span>
        </form>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        AddTodoItem:item => dispatch(AddTodoItem(item)),
    }
}

export default connect(null,mapDispatchToProps)(TodoFrom)
