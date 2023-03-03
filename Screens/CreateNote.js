import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

const CreateNote = ({ navigation, allNotes, setAllNotes }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <ScrollView>
          <TextInput
            placeholder="Note Title"
            style={{
              fontSize: 23,
              marginBottom: 20,
              // backgroundColor: "blue",
            }}
            value={noteTitle}
            onChangeText={setNoteTitle}
            multiline={true}
          ></TextInput>
          <TextInput
            value={noteText}
            onChangeText={setNoteText}
            placeholder="Note Text"
            multiline={true}
            style={{
              fontSize: 15,
              opacity: 0.9,
              borderWidth: 0,
              // backgroundColor: "red",
            }}
          ></TextInput>
        </ScrollView>
      </View>
      <Pressable
        onPress={() => {
          allNotes.push({
            noteId: Math.random(),
            noteText: noteText,
            noteTitle: noteTitle,
          });
          setAllNotes([...allNotes]);
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
  },
  body: {
    flex: 7,
    width: "100%",
    paddingTop: 25,
    paddingHorizontal: "6%",
  },
});

export default CreateNote;
