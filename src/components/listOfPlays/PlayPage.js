import { useState, useEffect } from "react";
import Play from "./Play";
import playData from "../../data/playData";
import { assignReviews } from "../../helperFunctions/filterData";

const PlayPage = ({ reviewData, display }) => {
	const [updatedPlayData, setUpdatedPlayData] = useState([]);
	useEffect(() => {
		setUpdatedPlayData(assignReviews(playData, reviewData.get));
	}, []);

	return (
		<div className="PlayPage">
			{updatedPlayData.map((e) => (
				<Play key={e.title} playData={e} display={display} />
			))}
		</div>
	);
};

export default PlayPage;
