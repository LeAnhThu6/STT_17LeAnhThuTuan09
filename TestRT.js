import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chia, cong, nhan, tru } from "./rdtk/Reducer";

const TestRT = () => {
  const [number, setNumber] = useState(0);

  const result = useSelector((state) => state.theme.result);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => {
          setNumber(parseInt(text));
        }}
        style={{
          width: 200,
          height: 40,
          alignSelf: "center",
          backgroundColor: "white",
          borderWidth: 1,
        }}
      ></TextInput>
      <View style={{ flexDirection: "row", gap: "50px", marginTop: 100 }}>
        <TouchableOpacity
          onPress={() => dispatch(cong(number))}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(tru(number))}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(nhan(number))}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(chia(number))}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 50, fontSize: 18, fontWeight: 500 }}>
        {result}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TestRT;
