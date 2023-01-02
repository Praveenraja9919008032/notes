
import './App.css';
import "./style.css";

import CreateArea from './comp/CreateArea';
import Header from "./comp/Header";
import Note from './comp/Note';
import Count from './comp/Count';
import { useState } from 'react';


function App(props) {
  const[notes,setNotes]= useState([
    {
      id:1,
      title:"Food",
      content:"Eat",
      flag:true
    }
  ])



  const[count,setCount] = useState(1)



  function addNote(newNote){
    setNotes([...notes,newNote])
    setCount((pre) => pre+1)
  }
  function DeleteNotes(id){
    
    
    setNotes(
      notes.map((note) =>
      note.id === id
      ?{...note,flag:false}
      :note
      )
    )
    setCount((pre) => pre-1)
  }
  return (
    <div className="App">
      <Header />
    <Count count={count === 0 ? "Empty" :`Showing ${count} Note in Database`} />
      <CreateArea onAdd={addNote} />
      
        <Note  notes={notes}
        OnDelete={DeleteNotes}/>

    </div>
  );
}

export default App;
