import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenStack } from "react-native-screens";
import Footer from "../Footer/Footer";
import CreateNote from "../Screens/CreateNote";
import Home from "../Screens/Home";
import Note from "../Screens/Note";

const Navigation = ({ allNotes, setAllNotes, note, setNote }) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="AllNotes">
          {(props) => (
            <Home
              {...props}
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              note={note}
              setNote={setNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Note">
          {(props) => (
            <Note
              {...props}
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              note={note}
              setNote={setNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="CreateNote">
          {(props) => (
            <CreateNote
              {...props}
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              note={note}
              setNote={setNote}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
