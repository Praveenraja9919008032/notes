import React from 'react';

function Note({notes,OnDelete,id})
 {
    return(
        <div >
            
       { notes.map((note) => (
         
        
         note.flag && <div className='note' key={note.id}>
            
        <h1> {note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => OnDelete(note.id)}>Delete</button>
         </div>

      ))}
        
            
        </div>
    )
};

export default Note;