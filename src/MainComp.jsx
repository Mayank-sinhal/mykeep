import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notediv from "./Notediv";

const MainComp = () => {
  const [notes, setnotes] = useState([]);

  return (
    <>
      <div className="main_div">
        <Header />
        <CreateNote notes={notes} setnotes={setnotes} />
        <Notediv notes={notes} setnotes={setnotes} />
        <Footer />
      </div>
    </>
  );
};

export default MainComp;
