import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import Colors from "../../constants/Colors";

const HeaderHome = (props) => {
    return (
        <Header>
            <Text style={styles.header__text}>SMWU</Text>
            <View style={styles.header__icon_container}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require("../../images/search_icon.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require("../../images/person_icon.png")}></Image>
                </TouchableOpacity>
            </View>
        </Header>
    );
};
const styles = StyleSheet.create({
    header__text: {
        flex: 5,
        textAlign: "left",
        fontSize: 30,
        fontWeight: "500",
    },
    header__icon_container: {
        flex: 1,
        flexDirection: "row",
    },
    icon: {
        marginRight: 15,
        width: 20,
        height: 20,
    },
});

export default HeaderHome;
