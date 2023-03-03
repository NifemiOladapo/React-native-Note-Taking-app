import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/Ionicons";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Pressable
        onPress={() => navigation.navigate("AllNotes")}
        style={{ paddingRight: 130 }}
      >
        <Icon name="notebook" size={30} color="#141414" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("CreateNote")}>
        <Icon2 name="md-create-outline" size={35} color="#141414" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 0.9,
    borderTopColor: "#d8d8d8",
  },
});

export default Footer;
