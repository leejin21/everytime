import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const SimplePost = (props) => {
    return (
        <View style={styles.content}>
            <View style={styles.post}>
                <Text style={styles.post__content}>{props.text}</Text>
                <View style={styles.footer}>
                    <Text style={styles.time}>{props.time}</Text>
                    <View style={styles.response}>
                        <Image source={require("../images/thumbsup.png")} style={{ ...styles.footer__icon, ...styles.footer__thumbsup }}></Image>
                        <Text style={styles.response__nums}>{props.likes}</Text>
                        <Image source={require("../images/comment.png")} style={{ ...styles.footer__icon, ...styles.footer__comment }}></Image>
                        <Text style={{ ...styles.response__nums, ...styles.response__comments }}>{props.comments}</Text>
                    </View>
                </View>
            </View>
            <View></View>
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        marginTop: -5,
    },
    post: {
        marginVertical: 5,
    },

    post__content: {
        marginTop: 10,
        fontSize: 12,
    },
    footer: {
        marginTop: 2,
        flexDirection: "row",
    },
    time: {
        flex: 3,
        fontSize: 10,
        fontWeight: "200",
    },
    response: {
        flexDirection: "row",
        alignItems: "center",
        flex: 8,
        justifyContent: "flex-end",
    },
    response__nums: {
        marginRight: 4,
        fontSize: 10,
        textAlignVertical: "center",
        color: Colors.pinky,
    },
    response__comments: {
        color: Colors.skyblueish,
    },
    footer__icon: {
        width: 13,
        height: 13,
        marginRight: 2,
    },
    footer__thumbsup: {
        tintColor: Colors.pinky,
    },
    footer__comment: {
        tintColor: Colors.skyblueish,
    },
});

export default SimplePost;
