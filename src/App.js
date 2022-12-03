
import './App.css';
import { useState } from 'react';

function App() {
  const [post, setPost]= useState([])
  const [loading, setLoading]=useState();
  
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json())
  .then(res=>{
    const user = res.filter(post=>post.userId==1)
               .map((user, index)=>(
                console.log(user)
               ))
   console.log(user);
          

  })
  .catch(error=>{
    console.log(error)
  })

  return (
    <div className="App">
      {loading ? "loading":posts}
      {error? error:null}
    </div>
  );
}

export default App;
