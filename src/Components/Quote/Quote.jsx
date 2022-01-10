import './Quote.css'
import { useState } from 'react'
import {Quot} from './QuoteData'
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'

const Quote = () => {
const [changeQuote, setChangeQuote] = useState(1)

    let listQuote = Quot.find((quoteList) => {
        if(quoteList.id === changeQuote){
            return quoteList.text
        }
        return
    } )


    
    const nextQuote = () => {
        if( changeQuote === 10){
            setChangeQuote(1)
        }else
        setChangeQuote(changeQuote + 1)
    }
    const prevQuote = () => { 
        if(changeQuote === 1){
            setChangeQuote(10)
        }else
        setChangeQuote(changeQuote - 1)
    }

    return (
        <div className='main__quote'>
        <div className='word__of__the__day'>
            <h4 className='cu'>Word Of The Day</h4>
            <p className='word'>{listQuote.id}. {listQuote.text}</p>
            <span className='direction'>
                <FaLessThan  onClick={prevQuote}/>
                <FaGreaterThan onClick={nextQuote}/>
            </span>
            </div>
        </div>
    )
}

export default Quote
