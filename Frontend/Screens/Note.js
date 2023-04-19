import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";

const Note = ({
  navigation,
  note,
  setNote,
  allNotes,
  setAllNotes,
  activeScreen,
  setActiveScreen,
}) => {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setShowFooter(false);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setShowFooter(true);
    });
  });

  return (
    <View style={styles.screen}>
      {/* <Header /> */}
      <View style={styles.body}>
        <ScrollView>
          <TextInput
            onChangeText={(e) => setNote({ ...note, noteTitle: e })}
            placeholder="Note Title"
            multiline={true}
            style={{ fontSize: 23, marginBottom: 20 }}
          >
            {note.noteTitle}
          </TextInput>
          <TextInput
            onChangeText={(e) => setNote({ ...note, noteText: e })}
            multiline={true}
            placeholder="Note Text"
            style={{ fontSize: 15, opacity: 0.9 }}
          >
            {note.noteText}
          </TextInput>
        </ScrollView>
      </View>
      <Pressable
        onPress={() => {
          const foundNote = allNotes.find(
            (anote) => anote.noteId === note.noteId
          );
          foundNote.noteText = note.noteText;
          foundNote.noteTitle = note.noteTitle;
          setAllNotes([...allNotes]);
          console.log(foundNote);
          setActiveScreen("home");
          navigation.navigate("AllNotes");
        }}
        style={{
          // backgroundColor: "blue",
          borderRadius: 5,
          paddingHorizontal: "6%",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 15 }}>SAVE</Text>
      </Pressable>
      {showFooter ? (
        <Footer
          navigation={navigation}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 15,
  },
  body: {
    flex: 8,
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: "6%",
  },
});

export default Note;
