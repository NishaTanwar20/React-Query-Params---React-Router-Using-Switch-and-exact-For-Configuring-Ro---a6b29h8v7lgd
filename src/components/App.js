import React from 'react'
import { useSearchParams } from 'react-router-dom';
import '../styles/App.css';

const App = () => {
  //Write your code here
  const [searchValue, setSearchValue] = useSearchParams();
  let id;
  let name="";
  let designation="";
  id=searchValue.get("id");
  name=searchValue.get("name");
  designation=searchValue.get("designation");
  return (
    <div className='details'>
    <button onClick={()=>setSearchValue({id:1, name:'Robin', designation:'scientist'})}>Employ details</button>
      Employee {id} named {name} works as {designation}
    </div>
  )
}

export default App;
