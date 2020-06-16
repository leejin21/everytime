import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const Title = (props) => {
    let moreVisible = <View style={styles.more}></View>;
    if (props.more === true) {
        moreVisible = (
            <TouchableOpacity style={styles.more} onPress={props.moreHandler.bind(this, props.which)}>
                <Text style={styles.more__text}>더 보기 ></Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.star__title}>
            <Text style={styles.title}>{props.title}</Text>
            {moreVisible}
        </View>
    );
};
const styles = StyleSheet.create({
    star__title: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 7,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        flex: 13,
    },
    more: {
        flex: 2,
    },
    more__text: {
        fontSize: 12,
        color: Colors.pinky,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
});

export default Title;
