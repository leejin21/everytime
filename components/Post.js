import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const Post = (props) => {
    return (
        <TouchableOpacity style={{ ...styles.content, ...props.style }}>
            <View style={styles.post}>
                <View style={styles.post__header}>
                    <View style={styles.profile}>
                        <Image source={require("../images/person_icon.png")} style={styles.profile__user}></Image>
                        <Text style={styles.profile__anonymous}>익명</Text>
                    </View>
                    <Text style={styles.time}>{props.time}</Text>
                </View>
                <Text style={styles.post__content}>{props.text}</Text>
                <View style={styles.footer}>
                    <Text style={styles.boardName}>{props.boardName}</Text>
                    <View style={styles.response}>
                        <Image source={require("../images/thumbsup.png")} style={{ ...styles.footer__icon, ...styles.footer__thumbsup }}></Image>
                        <Text style={styles.response__nums}>{props.likes}</Text>
                        <Image source={require("../images/comment.png")} style={{ ...styles.footer__icon, ...styles.footer__comment }}></Image>
                        <Text style={{ ...styles.response__nums, ...styles.response__comments }}>{props.comments}</Text>
                    </View>
                </View>
            </View>
            <View></View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    content: {
        marginTop: -5,
    },
    post: {
        marginVertical: 10,
    },
    post__header: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    profile: {
        flex: 5,
        flexDirection: "row",
    },
    profile__user: {
        width: 15,
        height: 15,
        tintColor: "white",
        backgroundColor: Colors.middle_greyish,
        borderWidth: 0.8,
        borderColor: Colors.middle_greyish,
        marginRight: 5,
    },
    profile__anonymous: {
        textAlignVertical: "center",
        fontSize: 12,
        fontWeight: "bold",
    },
    time: {
        flex: 1,
        justifyContent: "flex-end",
        textAlign: "right",
        fontSize: 10,
        fontWeight: "100",
    },
    post__content: {
        marginTop: 10,
        fontSize: 12,
    },
    footer: {
        marginTop: 10,
        flexDirection: "row",
    },
    boardName: {
        flex: 3,
        fontSize: 10,
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

export default Post;
