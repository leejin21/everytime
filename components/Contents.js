import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Contents = (props) => {
    return <View style={{ ...styles.border, ...props.style }}>{props.children}</View>;
};
const styles = StyleSheet.create({
    border: {
        marginVertical: 10,
        borderColor: Colors.greyish,
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 10,
        // backgroundColor: "grey",
    },
});

export default Contents;
