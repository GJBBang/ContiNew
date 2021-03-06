import { SetStateAction } from "react";
import Link from "next/link";
import cookie from "react-cookies";
import styled from "styled-components";

interface ItemProps {
	item: { name: string; address: string };
	setIsToggle: React.Dispatch<SetStateAction<boolean>>;
}

function MenuItem({ item, setIsToggle }: ItemProps) {
	const token = cookie.load("access_token");

	return (
		<Container onClick={() => setIsToggle(false)}>
			{item.name === "방내놓기" ? (
				<Title
					onClick={() =>
						token
							? (window.location.href = "/createSale")
							: (window.location.href = "/account/signin")
					}
				>
					{item.name}
				</Title>
			) : (
				<Link href={item.address} passHref>
					<Title>{item.name}</Title>
				</Link>
			)}
		</Container>
	);
}

const Container = styled.li`
	@media ${(props) => props.theme.tabletS} {
	}
`;

const Title = styled.a`
	font-size: 2rem;
	margin-left: 1.5rem;
	cursor: pointer;

	@media ${(props) => props.theme.tabletS} {
		font-size: 3rem;
	}
`;

export default MenuItem;
