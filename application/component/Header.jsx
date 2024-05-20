// CustomHeader.js
import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import ProfileImage from "../assets/images/aiImage.jpg";
import { MenuIcon } from "lucide-react-native";

export default function CustomHeader({ title }) {
  return (
    <View style={styles.headerContainer}>
      <View style={[styles.profile, { backgroundColor: "#ebe9e6" }]}>
        <MenuIcon color={"black"} />
      </View>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Search Product" />
      </View>
      <View style={styles.profile}>
        <Image
          source={ProfileImage}
          style={{ width: "100%", height: "100%", borderRadius: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputBox: {
    height: 40,
    width: 80,
    backgroundColor: "#ebe9e6",
    flex: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  input: {
    height: "100%",
    width: "100%",

    paddingHorizontal: 29,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
