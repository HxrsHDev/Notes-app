import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function change(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }
  function add(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div className="TitleClass">
      <form>
        <input
          value={note.title}
          onChange={change}
          name="title"
          placeholder="What to do!"
        />
        <textarea
          onChange={change}
          value={note.content}
          name="content"
          placeholder="note..."
          rows="3"
        />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
