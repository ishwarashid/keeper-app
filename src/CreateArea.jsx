
import {useState} from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [isExpended, setIsExpended] = useState(false);



    function handleChange(event){
        const {name, value} = event.target;
        setNewNote( prevValue => {
            return {...prevValue, [name]: value};
        });
    }

    function handleClick(){
        setIsExpended(true);
    }

    function submitNote(event){

        props.onAdd(newNote);
        
        setNewNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    return (
        <div>
        <form className="create-note">
        {
            isExpended &&
            <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        }
        
            <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpended ? "3" : "1"} value={newNote.content} />
        
            <Zoom in={isExpended}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>

        </form>
        </div>
    );
}

export default CreateArea;