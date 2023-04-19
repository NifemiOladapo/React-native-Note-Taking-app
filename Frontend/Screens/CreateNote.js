import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Keyboard,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const CreateNote = ({
  navigation,
  allNotes,
  setAllNotes,
  activeScreen,
  setActiveScreen,
}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

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
          allNotes.unshift({
            noteId: Math.random(),
            noteText: noteText,
            noteTitle: noteTitle,
          });
          setAllNotes([...allNotes]);
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
  },
  body: {
    flex: 8,
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: "6%",
  },
});

export default CreateNote;
