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

  // useEffect(async () => {
  //   try {
  //     await AsyncStorage.setItem("@notes", JSON.stringify(allNotes));
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);

  // useEffect(async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@notes");
  //     if (value !== null) {
  //       setAllNotes(value);
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);

  return (
    <Navigation
      allNotes={allNotes}
      setAllNotes={setAllNotes}
      note={note}
      setNote={setNote}
    />
  );
};

export default AppState;
