import React from "react";
import { View, Text, StyleSheet, ScrollView, ColorPropType, TouchableOpacity, Image } from "react-native";

import Header from "../components/Header";
import Post from "../components/Post";
import InnerContents from "../components/InnerContents";

import Colors from "../constants/Colors";

const PostList = (props) => {
    // TODO: 게시판 props.title마다 가지고 오는 디비가 달라야 함.
    const itemList = [
        { id: 1, time: "방금", text: "아하하하하하ㅏ하 띄어쓰기는 어케 하지", likes: "1", comments: "2" },
        { id: 2, time: "10분 전", text: "띄어쓰기 \n띄어쓰기\n오 됐다 됐다", likes: "1", comments: "2" },
        { id: 3, time: "11분 전", text: "나가고 싶어 언니", likes: "3", comments: "4" },
        { id: 4, time: "20분 전", text: "코로나 때문에 밖에 못 나가는 거 진짜 답답해", likes: "1", comments: "0" },
        { id: 5, time: "방금", text: "아하하하하하ㅏ하 띄어쓰기는 어케 하지", likes: "1", comments: "2" },
        { id: 6, time: "10분 전", text: "띄어쓰기 \n띄어쓰기\n오 됐다 됐다", likes: "1", comments: "2" },
        { id: 7, time: "11분 전", text: "나가고 싶어 언니", likes: "3", comments: "4" },
        { id: 8, time: "20분 전", text: "코로나 때문에 밖에 못 나가는 거 진짜 답답해", likes: "1", comments: "0" },
    ];
    return (
        <View style={styles.screen}>
            <Header style={styles.header}>
                <TouchableOpacity style={{ flex: 2, alignItems: "flex-start" }} onPress={props.inOrOut.bind(this, "out")}>
                    <Image style={styles.backIcon} source={require("../images/back.png")}></Image>
                </TouchableOpacity>
                <Text style={styles.header__text}>{props.title}</Text>
                <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
                    <Image style={styles.backIcon} source={require("../images/search_icon.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
                    <Image style={styles.backIcon} source={require("../images/3dots.png")}></Image>
                </TouchableOpacity>
            </Header>
            <ScrollView>
                {/* TODO: FlatList로 여기 바꿔주기 */}
                <InnerContents>
                    {itemList.map((item, index) => {
                        return <Post key={item.id} time={item.time} text={item.text} likes={item.likes} comments={item.comments} style={styles.item}></Post>;
                    })}
                </InnerContents>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        height: "100%",
        marginHorizontal: 10,
        marginTop: 50,
        paddingVertical: 10,
    },
    header: {
        alignItems: "center",
    },
    backIcon: { width: 15, height: 15 },
    item: {
        borderBottomColor: Colors.middle_greyish,
        borderBottomWidth: 0.5,
    },
    header__text: {
        flex: 10,
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default PostList;
