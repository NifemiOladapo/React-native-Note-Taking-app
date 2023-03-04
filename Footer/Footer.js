import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";

const Footer = ({ navigation, activeScreen, setActiveScreen }) => {
  useEffect(() => {
    console.log(activeScreen);
  }, [activeScreen]);

  return (
    <View style={styles.footer}>
      <Pressable
        onPress={() => {
          setActiveScreen("home");
          navigation.navigate("AllNotes");
        }}
        style={{ paddingRight: 130 }}
      >
        <Icon
          name="notebook"
          size={30}
          color={activeScreen === "home" ? "blue" : "#141414"}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setActiveScreen("create");
          navigation.navigate("CreateNote");
        }}
      >
        <Icon2
          name="md-create-outline"
          size={35}
          color={activeScreen === "create" ? "blue" : "#141414"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 0.9,
    borderTopColor: "#d8d8d8",
  },
});

export default Footer;
