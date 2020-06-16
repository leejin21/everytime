import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Contents from "../../components/Contents";
import Title from "../../components/Title";
import Post from "../../components/Post";
import SimplePost from "../../components/SimplePost";

import Colors from "../../constants/Colors";

const ContentsHome = (props) => {
    const [starBoards, setStarBoards] = useState([
        { id: 1, boardTitle: "자유게시판", boardContent: "아무말 아무말 예애ㅔ에에ㅔ" },
        { id: 2, boardTitle: "비밀게시판", boardContent: "으아아ㅏ아아아아아아ㅏ아ㅏ아무말웅애웅ㅇ" },
        { id: 3, boardTitle: "넷플릭숙", boardContent: "드라마가 좋아 영화가 좋아 으으ㅏ아" },
        { id: 4, boardTitle: "아무말게시판", boardContent: "대강 아무말이나 하자 적당히" },
        { id: 5, boardTitle: "과제할때소리지르숙", boardContent: "으아아ㅏ아아 교수님 적당히 으아아아" },
        { id: 6, boardTitle: "휴학생게시판", boardContent: "하지만 나는 휴학생이지롱 흐하하하ㅏ크하하" },
        { id: 7, boardTitle: "벌써한시", boardContent: "지금은 새벽 1:43,, 이제 자러 가야지" },
    ]);
    const [realtimeHot, setRealTimeHot] = useState([
        { id: 1, time: "06/10 02:39", text: "아침을 깨우는 산뜻한 봄날의 Lo-Fi Lo-Fi on a Fresh spring day", boardName: "새내기게시판", likes: "76", comments: "7" },
        { id: 2, time: "06/10 10:38", text: "kiss and make up~~~ tired of hearing sorry~~", boardName: "비밀게시판", likes: "188", comments: "99" },
    ]);
    const [hotPosting, setHotPosting] = useState([
        { id: 1, time: "32분 전", text: "온통 너로 멍든 내 하늘은 울적하단 말로 표현이 되려나", likes: "15", comments: "3" },
        { id: 2, time: "40분 전", text: "You say we're somethin', something or another ", likes: "30", comments: "10" },
        { id: 3, time: "56분 전", text: "Oh yeah this is hyperreal 발걸음 따라온 개척지", likes: "50", comments: "12" },
        { id: 4, time: "2시간 전", text: "처음부터 컴포넌트 나누는 것보다는 한 컴포넌트에...", likes: "32", comments: "2" },
    ]);
    const goToHotBoards = (which) => {
        props.move2Inner("HOT 게시판");
        props.goInOrOut("in");
    };
    return (
        <View>
            <Contents>
                <Title title="즐겨찾는 게시판" more={true} which="board" moreHandler={props.moreHandler}></Title>
                <View style={styles.content}>
                    {starBoards.map((board, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.star__board}
                                key={board.id}
                                onPress={() => {
                                    props.move2Inner(board.boardTitle);
                                    props.goInOrOut("in");
                                }}
                            >
                                <Text style={styles.star__board__title}>{board.boardTitle}</Text>
                                <Text style={styles.star__board__txt}>{board.boardContent}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </Contents>
            <Contents>
                <Title title="실시간 인기 글" more={false}></Title>
                {realtimeHot.map((post, index) => {
                    return (
                        <TouchableOpacity key={post.id}>
                            <Post time={post.time} text={post.text} boardName={post.boardName} likes={post.likes} comments={post.comments}></Post>
                        </TouchableOpacity>
                    );
                })}
            </Contents>
            <Contents>
                <Title title="HOT 게시물" more={true} which="board" moreHandler={goToHotBoards}></Title>
                {hotPosting.map((post, index) => {
                    return (
                        <TouchableOpacity key={post.id}>
                            <SimplePost time={post.time} text={post.text} likes={post.likes} comments={post.comments}></SimplePost>
                        </TouchableOpacity>
                    );
                })}
            </Contents>
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        marginTop: -5,
    },
    star__board: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        // backgroundColor: "grey",
        alignContent: "center",
        justifyContent: "flex-start",
    },
    star__board__title: {
        // justifyContent: "flex-start",
        // backgroundColor: "yellow",

        textAlignVertical: "center",
        fontSize: 15,
        marginRight: 10,
    },
    star__board__txt: {
        // backgroundColor: "grey",
        textAlignVertical: "center",
        fontSize: 12,
        fontWeight: "200",
    },
});

export default ContentsHome;
