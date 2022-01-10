import React from 'react'
import './SubHead.css'
import './HeadList'
import HeadList from './HeadList'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const SubHead = ({ Curial}) => {
    return (
        <div className='sub__head'>
            <div className='priority'>
                <h4>PRIORITY</h4>
                <div className='pp'>
                {
                    Curial.map( priority => {
                        return <HeadList key={uuidv4()} priorities={priority}/>
                    } )
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        Curial:state.Todo.Priorities
    }
}

export default connect(mapStateToProps)(SubHead)
