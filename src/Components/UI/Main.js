import React from 'react'
import Header from './Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CharactGrid from '../Characters/CharctersGrid'
import Search from '../Characters/Search'
const Main=()=>{
  const [posts,setPosts]=useState([]);
  const [query,setQuery]=useState('');
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res=>{
      console.log(res.data)
      setPosts(res.data)
      setLoading(false);
    }).catch(err=>{
      console.log(err)
    })
  },[query])
 return <div className='container'>
  <Header/>
  <Search setQuery={setQuery}/>
  <section>
    <CharactGrid posts={posts} loading={loading}/>
    </section>
  </div>
}
export default Main