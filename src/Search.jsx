import React,{useState} from 'react';
import Sresult from './Sresult';
import './Search.css'

const Search = () =>{
    const [img,setImg] =useState('')
    const inputEvent = (evet) =>{
        // const data = evet.target.value
        setImg(evet.target.value);
        // console.log(data,'mama')
    }

    return(
        <div className='component'>
         <input type='text' className='box'
         placeholder='Search Anything' value={img} onChange={inputEvent}/>
          <Sresult name={img}/> 
        </div>
    )
}

export default Search