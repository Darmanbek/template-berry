import { PieChartOutlined } from "@ant-design/icons";
import { FC } from "react";
import { UiPageHeader } from "src/components/ui";

const Statistics: FC = () => {
	return (
		<>
			<UiPageHeader
				title={"Statistics"}
				paths={[
					{
						path: "/widget/statistics",
						title: (
							<>
								<PieChartOutlined />
								<span>Statistics</span>
							</>
						),
					},
				]}
			/>
		</>
	);
};

export default Statistics;
