import React from "react";
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import HeaderHome from "../elements/home/HeaderHome";
import ContentsHome from "../elements/home/ContentsHome";

import Colors from "../constants/Colors";

const Home = (props) => {
    return (
        <View style={styles.screen}>
            <HeaderHome></HeaderHome>
            <ScrollView style={styles.scrollContents}>
                <ContentsHome moreHandler={props.changeOuterScreen} which="home" goInOrOut={props.goInOrOut} move2Inner={props.changeInnerScreen}></ContentsHome>
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
});

export default Home;
