import { Flex, Result } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "src/components/shared/Container/Container";
import { UiButton } from "src/components/ui";
import { css } from "styled-components";


const NotFound: FC = () => {
	const navigate = useNavigate();

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
			<Flex align={"center"} justify={"center"} flex={1}>
				<Result
					status={"404"}
					title={"404"}
					subTitle="Sorry, the page you visited does not exist."
					extra={<UiButton onClick={() => navigate("/")} type="primary">Back Home</UiButton>}
				/>
			</Flex>
		</Container>
	);
};

export { NotFound };
