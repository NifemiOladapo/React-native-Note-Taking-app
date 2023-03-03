import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRef, useState } from "react";

const Note = ({ navigation, note, setNote, allNotes, setAllNotes }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <View style={styles.screen}>
      <Header />
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
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 15,
  },
  body: {
    flex: 7,
    width: "100%",
    paddingTop: 25,
    paddingHorizontal: "6%",
  },
});

export default Note;
