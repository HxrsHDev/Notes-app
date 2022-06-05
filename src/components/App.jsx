import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = useState([]);
  function AddNote(note) {
    setNotes(prevNotes => {return [...prevNotes, note]});    
  }

  function deleteNote(id) {
    setNotes((prevNotes)=>{
        return prevNotes.filter((item, index)=>{
            return index !== id;
        }
      );  })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {AddNote}/>
      {Notes.map((noteitem, index) => {
        return <Note delete={deleteNote} key={index} id={index} title={noteitem.title} content={noteitem.content}/>
        })}
      <Footer />
    </div>
  );
}

export default App;
