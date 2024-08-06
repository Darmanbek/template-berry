import { Flex } from "antd";
import { FC } from "react";
import { Container, Logo } from "src/components/shared";
import { css } from "styled-components";

const Home: FC = () => {
	return (
		<Container
			component={"section"}
			styled={css`
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				flex-grow: 1;
			`}
		>
			<Flex align={"center"} justify={"center"} style={{ flexGrow: 1 }}>
				<Logo isLarge={true} />
			</Flex>
		</Container>
	);
};

export default Home;
