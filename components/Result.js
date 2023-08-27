import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./util";

// print the lap time
function Result({ results }) {

  const lapTime = () => {
    let a = null
    if(results[0] === undefined) {
      a = 0
    } else {
      a = results[0]
    };

    let b = null
    if(results[1] === undefined) {
      b = 0
    } else {
      b = results[1]
    };

    const c = a - b
    return c;
  }
    
   

  return (
    <ScrollView>
      <View style={styles.resultItem} />
      {results.map((item,index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}
          </Text>
          <Text style={styles.resultItemText}>{displayTime(lapTime)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: { color: "#fff" },
});

export default Result;
