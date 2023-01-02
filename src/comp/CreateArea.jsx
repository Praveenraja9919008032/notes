import React, { useState } from "react";

function CreateArea({onAdd})
 {
    const [ note, setNote] = useState({
        title: "",
        content: "",
    });

        function handleChange(e){
            const{name,value}= e.target;
            setNote((preValue) => {
                return{
                ...preValue,[name]:value,
            };
        });
    }
    const[isExpanded,setExpanded] =useState(false);
    function handleExpanded(){
        setExpanded(true);
    }

    function submitButton(event){
        event.preventDefault();
   
    

        if(!note.content) 
        {
            alert("Please Fill The Notes")
            return
        }
        const id1 = Math.floor(Math.random()*10000) + 1
        const sendNote ={
            id:id1,
            title:note.title,
            content:note.content,
            flag:true
        }
        onAdd(sendNote);
        setNote({title:"",content:""})
        
    }

    return(
        <div>
            <form>
                {isExpanded && (
                    <input  value={note.title} type="text"  placeholder="Title"name="title"
                    onChange={handleChange}/>
                )}
                <p>
                    <textarea value={note.content}
                    onClick={handleExpanded}
                    name="content"
                    placeholder='Take a note'
                    onChange={handleChange}
                    rows={isExpanded ? 3 : 1}>
                        {""}
                    </textarea>
                </p>
                <button onClick={submitButton}>Add</button>
         </form>
        </div>
    );
}

export default CreateArea;