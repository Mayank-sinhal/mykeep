import React from "react";
import Note from "./Note";

const Notediv = ({ notes, setnotes }) => {
  return (
    <>
      <div className="notediv">
        {notes.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              setnotes={setnotes}
              notes={notes}
            />
          );
        })}
      </div>
    </>
  );
};
export default Notediv;
