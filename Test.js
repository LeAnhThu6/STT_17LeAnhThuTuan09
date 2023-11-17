import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Provider, connect } from "react-redux";

import store from "./redux/store";
import { useState } from "react";
const Test = (props) => {
  const { cong, tru, nhan, chia, result } = props;
  const [number, setNumber] = useState(0);
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
          onPress={() => cong(number)}
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
          onPress={() => tru(number)}
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
          onPress={() => nhan(number)}
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
          onPress={() => chia(number)}
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
const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cong: (payload) => dispatch({ type: "ACTION1", payload: payload }),
    tru: (payload) => dispatch({ type: "ACTION2", payload: payload }),
    nhan: (payload) => dispatch({ type: "ACTION3", payload: payload }),
    chia: (payload) => dispatch({ type: "ACTION4", payload: payload }),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
