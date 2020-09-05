import React from 'react'
import Character from './Character'
import Spinner from '../UI/Spinner'
const ChracterGrid=(props)=>{
  
  return props.loading ? (<h1> <Spinner/></h1>) :(<div className='cards'>
{props.posts.map(el=><Character key={el.char_id} post={el}/>)}
  </div>
)
}
export default ChracterGrid