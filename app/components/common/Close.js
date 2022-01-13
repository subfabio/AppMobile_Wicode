import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="close-circle"
        size={60}
        color="rgba(92, 90, 91, 0.7)"
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    padding: 10,
  },
});

export default Close;
