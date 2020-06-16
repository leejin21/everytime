import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

import Header from "../components/Header";
import Contents from "../components/Contents";

import Colors from "../constants/Colors";

const Board = (props) => {
    // 하드코딩
    const firstItems = [
        { id: 1, imgSrc: require("../images/my_post.png"), tintCol: "blue", txt: "내가 쓴 글" },
        { id: 2, imgSrc: require("../images/comment_post.png"), tintCol: "green", txt: "댓글 단 글" },
        { id: 3, imgSrc: require("../images/scrap_post.png"), tintCol: "orange", txt: "스크랩" },
        { id: 4, imgSrc: require("../images/hot_post.png"), tintCol: "red", txt: "HOT 게시판" },
        { id: 5, imgSrc: require("../images/trophy_post.png"), tintCol: "gold", txt: "BEST 게시판" },
    ];
    const secItems = [
        { id: 1, tintCol: "black", txt: "자유게시판" },
        { id: 2, tintCol: "black", txt: "비밀게시판" },
        { id: 3, tintCol: "black", txt: "질문게시판" },
        { id: 4, tintCol: "black", txt: "졸업생게시판" },
        { id: 5, tintCol: Colors.middle_greyish, txt: "새내기게시판" },
    ];
    const subItems = [
        { id: 1, tintCol: "black", brdName: "넷플릭숙", brdIntro: "netflix&chill" },
        { id: 2, tintCol: "black", brdName: "숙플레이스", brdIntro: "숙대 근처 맛집 소개" },
        { id: 3, tintCol: Colors.middle_greyish, brdName: "슬의생재미있숙", brdIntro: "슬의생 애청자 다모여" },
        { id: 4, tintCol: Colors.middle_greyish, brdName: "청파장터", brdIntro: "책 사고 팔기" },
        { id: 5, tintCol: Colors.middle_greyish, brdName: "소융 아이티 컴과", brdIntro: "cs it 전공자들의 모임" },
        { id: 6, tintCol: Colors.middle_greyish, brdName: "삼 육 구 삼 육 구", brdIntro: "가늘고 길게~~" },
        { id: 7, tintCol: Colors.middle_greyish, brdName: "과제할때소리지르는방", brdIntro: "아아아아아아팀플아아아아아아" },
        { id: 8, tintCol: Colors.middle_greyish, brdName: "우리는말하는감자", brdIntro: "힘든 4학년들 드루와드루와" },
    ];

    return (
        <View style={styles.screen}>
            <Header>
                <Text style={styles.header__text}>게시판</Text>
                <View style={styles.header__icon_container}></View>
            </Header>
            <ScrollView style={styles.scrollContents}>
                {/* 첫번째 contents */}
                <Contents style={styles.contents}>
                    {firstItems.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.item} key={item.id}>
                                <Image source={item.imgSrc} style={{ ...styles.icon, ...{ tintColor: item.tintCol } }}></Image>
                                <Text>{item.txt}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </Contents>
                {/* 두번째 contents */}
                <Contents style={styles.contents}>
                    {secItems.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.item} key={item.id}>
                                <Image source={require("../images/pin_icon.png")} style={{ ...styles.pin_icon, ...{ tintColor: item.tintCol } }}></Image>
                                <Text>{item.txt}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </Contents>
                {/* 세번째 contents */}
                <Contents>
                    {subItems.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.item} key={item.id}>
                                <Image source={require("../images/pin_icon.png")} style={{ ...styles.pin_icon, ...{ tintColor: item.tintCol } }}></Image>
                                <View>
                                    <Text>{item.brdName}</Text>
                                    <Text style={{ color: Colors.middle_greyish, fontSize: 12, fontWeight: "200" }}>{item.brdIntro}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </Contents>
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
    contents: {
        paddingVertical: 15,
    },
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
    item: {
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: "center",
        width: "100%",
    },
    icon: {
        marginRight: 15,
        width: 15,
        height: 15,
    },
    pin_icon: {
        width: 10,
        height: 15,
        marginRight: 17.5,
        marginLeft: 2.5,
    },
});

export default Board;
