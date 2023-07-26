import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = ({ key, setnotes, title, content, id }) => {
  const delefun = (event) => {
    setnotes((oldnotes) => {
      return oldnotes.filter((item, i) => {
        return id !== i;
      });
    });
  };

  return (
    <>
      <div className="note">
        <h1>{title}</h1>

        <br />
        <p>{content}</p>

        <button className="buttn btn" onClick={delefun}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
};

export default Note;
