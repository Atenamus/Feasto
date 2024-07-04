import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const EditableText = ({ label, initialValue, updateHandler }) => {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label.toUpperCase()}</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            editable={editable}
            value={value}
            onChangeText={setValue}
            placeholderTextColor={"#000000"}
          />
          {!editable && (
            <Text style={styles.editText} onPress={() => setEditable(true)}>
              Edit
            </Text>
          )}
        </View>
      </View>
      {editable && (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.updateButton}
            activeOpacity={0.7}
            onPress={() => {
              setEditable(false);
              updateHandler(value);
            }}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            activeOpacity={0.7}
            onPress={() => {
              setEditable(false);
              setValue(initialValue);
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    color: "gray",
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    fontSize: 17,
    color: "gray",
  },
  editText: {
    color: "#ff0000",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  updateButton: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "40%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  cancelButton: {
    borderColor: "#ff0000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "40%",
  },
  cancelButtonText: {
    color: "#ff0000",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default EditableText;
