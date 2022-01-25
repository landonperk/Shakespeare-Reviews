import { useEffect, useState } from "react";
import { byHighestRated } from "../helperFunctions/filterData";

export const useGetReviewData = () => {
	const [get, set] = useState(null);

	useEffect(() => {
		fetch("https://shakespeare.podium.com/api/reviews", { headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" } })
			.then((res) => res.json())
			.then((data) => {
				byHighestRated(data, set);
			});
	}, []);
	return { get, set };
};
