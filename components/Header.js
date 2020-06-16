import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
    return <View style={styles.header}>{props.children}</View>;
};
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "green",
    },
});

export default Header;
