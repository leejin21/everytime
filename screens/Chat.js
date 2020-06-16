import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Header from "../components/Header.js";

const Chat = (props) => {
    return (
        <View style={styles.screen}>
            <Header>
                <Text style={styles.header__text}>채팅</Text>
            </Header>
            <ScrollView style={styles.scrollContents}>
                <Text>scroll view</Text>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        height: "93%",
        marginHorizontal: 10,
        marginTop: 50,
        paddingVertical: 10,
    },
    scrollContents: {
        paddingHorizontal: 5,
    },
    header__text: {
        flex: 5,
        textAlign: "left",
        fontSize: 30,
        fontWeight: "500",
    },
});

export default Chat;
