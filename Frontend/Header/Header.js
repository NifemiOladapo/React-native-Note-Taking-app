import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 21 }}>StartUp Notes</Text>
      <Pressable>
        <Icon name="user" size={50} color="#141414" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    width: "100%",
    elevation: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 25,
    // paddingBottom: 30,
    height: 75,
    justifyContent: "space-around",
  },
});

export default Header;
