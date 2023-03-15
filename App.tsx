import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList style={styles.FlatList} />
        </View>
        <View style={styles.Form}>
          <TextInput
          style={styles.Input}
          placeholderTextColor="#999"
          autoCorrect={true}
          placeholder="Adicionar nova tarefa"
          maxLength={25}
          />
          <TouchableOpacity style={styles.Button}>
            <Ionicons size={25} name="ios-add" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },
  Body: {
    flex: 1
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5,
  }
});
