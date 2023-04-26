import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

export default function useEffect() {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("first");
  });
  useEffect(() => {
    console.log("second");
  }, []);
  useEffect(() => {
    console.log("third");
  }, [value]);
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
        <Text style={{ color: "blue", alignSelf: "center" }}> Value </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}> {value} </Text>

      <Text style={{ fontSize: 20 }}> {secondValue} </Text>
      <TouchableOpacity
        onPress={() => {
          setSecondValue(secondValue + 1);
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
        <Text style={{ color: "blue", alignSelf: "center" }}>
          {" "}
          SecondValue{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
