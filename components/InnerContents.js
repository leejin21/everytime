import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const InnerContents = (props) => {
    return <View style={{ ...styles.border, ...props.style }}>{props.children}</View>;
};
const styles = StyleSheet.create({
    border: {
        marginVertical: 10,
        padding: 10,
        // backgroundColor: "grey",
    },
});

export default InnerContents;
