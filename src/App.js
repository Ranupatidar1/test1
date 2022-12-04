
import './App.css';
import { useEffect, useState } from 'react';

const App=() =>{
  const [post, setPost]= useState([])
  const [loading, setLoading]=useState();
  const [error, setError]=useState()
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(res=>{
      const post = res.filter(post=>post.userId==1)
              setPost(post)
              console.log(post)
              
    
            
  
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  

  return (
    <div className="App">
     { post.map((post, index)=>(
                 JSON.stringify(post)
               ))
        }
    </div>
  );
}

export default App;
