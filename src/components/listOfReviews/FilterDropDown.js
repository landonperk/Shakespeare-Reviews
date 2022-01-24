import { useState } from "react";
import { byHighestRated, byLowestRated, byNewest, byOldest } from "../../helperFunctions/filterData";

const FilterDropDown = ({ data, set }) => {
	const [selectedFilter, setSelectedFilter] = useState("highest rated");
	const filterHandlers = { "Highest Rated": byHighestRated, "Lowest Rated": byLowestRated, Newest: byNewest, Oldest: byOldest };

	const handleChange = (event) => {
		filterHandlers[event.target.value](data, set);
	};

	return (
		<div className="Filter level-right mb-4">
			<div className="select is-primary is-rounded">
				<select onChange={handleChange}>
					{Object.keys(filterHandlers).map((e) => (
						<option key={e}>{e}</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default FilterDropDown;
