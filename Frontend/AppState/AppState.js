import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppState = () => {
  const [allNotes, setAllNotes] = useState([
    {
      noteText:
        "this is my first note. wow his very first note. wow thats really nice. wow",
      noteTitle: "First idea",
      noteId: 1,
    },
    {
      noteText:
        "this is my Second note. wow his very second note. wow thats really nice. wow",
      noteTitle: "second idea",
      noteId: 2,
    },
  ]);

  const [note, setNote] = useState({});

  const [activeScreen, setActiveScreen] = useState("home");

  return (
    <Navigation
      allNotes={allNotes}
      setAllNotes={setAllNotes}
      note={note}
      setNote={setNote}
      activeScreen={activeScreen}
      setActiveScreen={setActiveScreen}
    />
  );
};

export default AppState;
