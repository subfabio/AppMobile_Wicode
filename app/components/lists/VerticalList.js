import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../common/Title";
import VerticalCard from "../cards/VerticalCard";

const VerticalList = ({ title, data }) => {
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.container}>
        {data.map((item) => (
          <VerticalCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticalList;
