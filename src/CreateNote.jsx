import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./keepcss.css";
const CreateNote = ({ notes, setnotes }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [expand, setExpand] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setNote((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };

  const expandit = () => {
    setExpand(true);
  };
  const unexpand = () => {
    setExpand(false);
  };

  const addEvent = () => {
    setnotes((oldnotes) => {
      return [note, ...oldnotes];
    });
    setNote({ title: "", content: "" });
  };

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              value={note.title}
              onChange={update}
              name="title"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            placeholder="Write a note..."
            value={note.content}
            onChange={update}
            name="content"
            onClick={expandit}
            onDoubleClick={unexpand}
          ></textarea>
          {expand ? (
            <Button variant="contained" className="btn" onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
