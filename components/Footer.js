import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../constants/Colors";

const Footer = (props) => {
    let tintColors = { home: Colors.dark_greyish, board: Colors.dark_greyish, chat: Colors.dark_greyish };
    if (props.curState === "home") {
        tintColors.home = Colors.pinky;
    } else if (props.curState === "board") {
        tintColors.board = Colors.pinky;
    } else if (props.curState === "chat") {
        tintColors.chat = Colors.pinky;
    }
    return (
        <View style={{ ...styles.footer, ...props.style }}>
            <TouchableOpacity onPress={props.changeScreenTo.bind(this, "home")}>
                <Image source={require("../images/home_icon.png")} style={{ ...styles.icon, ...{ tintColor: tintColors.home } }}></Image>
                <Text style={styles.footer__text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.changeScreenTo.bind(this, "board")}>
                <Image source={require("../images/board_icon.png")} style={{ ...styles.icon, ...{ tintColor: tintColors.board } }}></Image>
                <Text style={styles.footer__text}>Board</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.changeScreenTo.bind(this, "chat")}>
                <Image source={require("../images/chat_icon.png")} style={{ ...styles.icon, ...{ tintColor: tintColors.chat } }}></Image>
                <Text style={styles.footer__text}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    footer: {
        borderTopColor: Colors.dark_greyish,
        borderTopWidth: 0.7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    icon: {
        width: 35,
        height: 35,
    },
    footer__text: {
        textAlignVertical: "center",
        textAlign: "center",
        color: Colors.dark_greyish,
    },
});

export default Footer;
