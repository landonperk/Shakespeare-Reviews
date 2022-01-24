import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Stars = ({ rating, id }) => {
	let numberOfStars = parseFloat(rating);
	let starList = [];

	while (numberOfStars >= 1) {
		starList.push(
			<span key={id + numberOfStars}>
				<IconContext.Provider value={{ color: "#37D1B3", size: "25px" }}>
					<BsStarFill />
				</IconContext.Provider>
			</span>
		);
		numberOfStars--;
	}
	if (numberOfStars >= 0.5) {
		starList.push(
			<span key={id + numberOfStars}>
				<IconContext.Provider value={{ color: "#37D1B3", size: "25px" }}>
					<BsStarHalf />
				</IconContext.Provider>
			</span>
		);
	}

	return <div className="Stars level-right">{starList}</div>;
};

export default Stars;
