import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// we will deal with buttons here

function Control ({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
  return (
    <>
      <TouchableOpacity style={[styles.controlButtonBorder,{ backgroundColor: isRunning ? "#333333" : "#1c1cle"},]}
      onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#fff" : "#9d9ca2"}}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.controlButtonBorder,{ backgroundColor: isRunning ? "#340e0d" : "#0a22a12"},]}
      onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c"}}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});

export default React.memo(Control);
