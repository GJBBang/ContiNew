import { useState, useEffect } from "react";
import styled from "styled-components";

import { chatApi } from "src/api";
import { Chat, ChatList, ItemDetail } from "@components/chat";

const DUMMY_DATA = [
	{
		chatId: 1,
		user: "김싸피",
		person: "이싸피",
		lastContent: "화장실 사진 좀 찍어주세요.",
		updatedAt: "2022-04-20 14:22:04",
	},
	{
		chatId: 2,
		user: "박싸피",
		person: "유싸피",
		lastContent: "벌레는 안나오나요 ?",
		updatedAt: "2022-04-19 18:58:22",
	},
	{
		chatId: 3,
		user: "조싸피",
		person: "이싸피",
		lastContent: "깔끔하고 좋아요 !!",
		updatedAt: "2022-04-19 08:02:39",
	},
];

function ChatPage() {
	const [chatListData, setChatListData] = useState({
		chat_rooms: [
			{
				buyer: "",
				last_message: "",
				last_message_time: "",
				room_id: "",
				sale: 0,
				seller: "",
			},
		],
		current_page_count: 0,
		total_page_count: 0,
	});

	const getChatList = async () => {
		try {
			const res = await chatApi.getChat();
			setChatListData(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getChatList();
	}, []);

	return (
		<Container>
			<ChatList chatList={chatListData} />
			<Chat />
			<ItemDetail />
		</Container>
	);
}

const Container = styled.div`
	height: 70vh;
	display: flex;
	align-items: center;
	margin: 10rem;
	border: solid 2px #d3d3d3;
`;

export default ChatPage;
