import React from 'react'
const Character=({post})=>{
  return(<div className="card">
      <div className="inner-card"> 
    <div className='front'>
<img src={post.img} alt=''/>
</div>
<div className='back'>
 <h1>{post.name}</h1> 
 <ul>
   <li>
<strong>Actor name : </strong>{post.portrayed}
</li>
   <li>
<strong>Nickname : </strong>{post.nickname}
</li>
   <li>
<strong>Birthday : </strong>{post.birthday}
</li>
<li>
<strong>Status : </strong>{post.status}
</li>
</ul>
</div>
  </div> 
    </div>
  )
}
export default Character