import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function UseState() {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setValue(value + 1);
          console.log(value);
        }}
        style={{
          marginBottom: 22,
          backgroundColor: "lightgreen",
          borderRadius: 7,
          width: "30%",
          height: 40,
        }}
      >
        <Text style={{ color: "blue", alignSelf: "center" }}> PLUS </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}> {value} </Text>
      <TouchableOpacity
        onPress={() => {
          setValue(value - 1);
          console.log(value);
        }}
        style={{
          marginTop: 22,
          backgroundColor: "lightgreen",
          borderRadius: 7,
          width: "30%",
          height: 40,
        }}
      >
        <Text style={{ color: "blue", alignSelf: "center" }}> MINUS </Text>
      </TouchableOpacity>
    </View>
  );
}
