import React from 'react'
import { BsCheck2Square} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import {RemoveImportantItem} from '../Store/TodoAction'
import { connect } from 'react-redux'
import './HeadList.css'

const HeadList = ({priorities, RemoveImportantItem}) => {
    return (
        <div className='p1'>
            <div className='ul'>
                <span className='plus'>
                <BsCheck2Square/>
            </span>
             <span className='li'>{priorities.veryImportant}</span> 
             <div>
                 <span>
                     <AiOutlineDelete onClick={()=>RemoveImportantItem(priorities)}/>
                 </span>
                 </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        RemoveImportantItem:things => dispatch(RemoveImportantItem(things))
    }
}

export default connect(null, mapDispatchToProps)(HeadList)
