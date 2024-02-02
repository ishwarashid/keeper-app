import {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "./notes";
import CreateArea from "./CreateArea";


function App() {


  const [notes, setNotes] = useState([]);

  function addNote(note){
    
    setNotes(prevValue => [...prevValue, note])
  }

  function deleteNote(id){
    console.log(id)
    setNotes(prevValue => {

      return prevValue.filter( (note, index) => index !== id);
    })
    
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote}/>
      {
        notes.map( (note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
      ))}

      <Footer />
      
    </>
  )
}

export default App;
