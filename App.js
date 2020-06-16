import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Home from "./screens/Home";
import Board from "./screens/Board";
import Chat from "./screens/Chat";
import PostList from "./screens/PostList";

import Footer from "./components/Footer";

export default function App() {
    const [inOrOut, setInOrOut] = useState("out");
    const [outerState, setOuterState] = useState("home");
    const [innerState, setInnerState] = useState("");

    let screen = <Home></Home>;
    let bottom = <Footer style={styles.footer} changeScreenTo={outerStateHandler} curState={outerState}></Footer>;

    const outerStateHandler = (which) => {
        setOuterState((state) => which);
        // console.log("stateHandler", { state });
    };

    const inOrOutHandler = (isOuter) => {
        setInOrOut((inOrOut) => isOuter);
    };

    const innerStateHandler = (which) => {
        setInnerState((state) => which);
        // console.log("stateHandler", { state });
    };

    if (inOrOut === "out") {
        bottom = <Footer style={styles.footer} changeScreenTo={outerStateHandler} curState={outerState}></Footer>;
        if (outerState === "home") {
            screen = <Home changeOuterScreen={outerStateHandler} goInOrOut={inOrOutHandler} changeInnerScreen={innerStateHandler}></Home>;
        } else if (outerState === "board") {
            screen = <Board></Board>;
        } else if (outerState === "chat") {
            screen = <Chat></Chat>;
        }
    } else if (inOrOut === "in") {
        screen = <PostList title={innerState} inOrOut={inOrOutHandler}></PostList>;
        // 여기에 광고 배너 넣기
        bottom = (
            <View style={styles.adContantiner}>
                <Text style={{ fontWeight: "bold" }}>광고 들어갈 자리</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.screen}>{screen}</View>
            {bottom}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: "90%",
    },
    footer: {
        height: "10%",
    },
    adContantiner: {
        marginTop: 40,
        // height: "10%",
        borderTopColor: "grey",
        borderTopWidth: 0.5,
    },
});
