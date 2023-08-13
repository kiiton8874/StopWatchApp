// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// export function displayTime({time}) {

// const padToTwo = (number) => {
//   // 一桁の場合は、前に0をつける
//   // 返却は文字列になる
//   if (number < 10) {
//     number = '0' + number
//   }
//   return number
// };

// return(
//   <View style={styles.container}>
//     <Text style={styles.hour}>{padToTwo(Math.floor(time / (60 * 1000)))}</Text>
//     <Text style={styles.colon}>:</Text>
//     <Text style={styles.minutes}>{padToTwo(Math.floor(time / (1000)) % 60)}</Text>
//     <Text style={styles.colon}>:</Text>
//     <Text style={styles.seconds}>{padToTwo(Math.floor((time % 1000) / 10))}</Text>
//   </View>
// );
// }

// const styles = StyleSheet.create({
//   container: {
//     color: "#ffffff",
//   },
//   hour: {
//     color: "#ffffff",
//   },
//   colon: {
//     color: "#ffffff",
//   },
//   minutes: {
//     color: "#ffffff",
//   },
//   seconds: {
//     color: "#ffffff",
//   },
// });

