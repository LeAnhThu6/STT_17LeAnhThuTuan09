import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Provider } from "react-redux";

import store from "./rdtk/store";
import Test from "./Test";
import TestRT from "./TestRT";
export default function App() {
  return (
    <Provider store={store}>
      {/* <Test /> */}
      <TestRT />
    </Provider>
  );
}
