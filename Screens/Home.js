import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = ({ navigation, allNotes, setAllNotes, note, setNote }) => {
  useEffect(() => {
    const getStorageData = async () => {
      const items = await AsyncStorage.getItem("@allnotes");
      const data = JSON.parse(items);
      setAllNotes(data);
    };

    getStorageData();
  }, []);

  useEffect(() => {
    const addNOteToStorage = async () => {
      await AsyncStorage.setItem("@allnotes", JSON.stringify(allNotes));
    };

    addNOteToStorage();
  }, [allNotes]);

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.notesWrapper}>
        <ScrollView>
          {allNotes.map((e) => {
            return (
              <Pressable
                onPress={() => {
                  setNote(e);
                  navigation.navigate("Note");
                }}
                style={styles.singleNote}
                key={e.noteId}
              >
                <Pressable
                  onPress={() => {
                    setAllNotes(
                      allNotes.filter((note) => note.noteId !== e.noteId)
                    );
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      // top: 10,
                      left: "100%",
                      color: "red",
                      // borderWidth: 2,
                      // borderColor: "red",
                      // borderRadius: 10,
                      // padding: 5,
                    }}
                  >
                    X
                  </Text>
                </Pressable>

                <Text
                  numberOfLines={1}
                  style={{ fontSize: 17, textTransform: "capitalize" }}
                >
                  {e.noteTitle}
                </Text>
                <Text numberOfLines={1} style={{ opacity: 0.6 }}>
                  {e.noteText}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 15,
    flex: 1,
    backgroundColor: "white",
  },
  notesWrapper: {
    flex: 8,
    paddingTop: 25,
    paddingHorizontal: 10,
    // backgroundColor: "red",
    width: "100%",
  },
  singleNote: {
    backgroundColor: "white",
    marginBottom: 15,
    elevation: 4,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#d8d8d8",
  },
});

export default Home;
