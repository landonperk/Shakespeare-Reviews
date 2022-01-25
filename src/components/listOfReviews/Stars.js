import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const Stars = ({ rating, id }) => {
	const startValue = { color: "#55C778", size: "25px" };
	let numberOfStars = parseFloat(rating);
	let starList = [];

	while (numberOfStars >= 1) {
		starList.push(
			<span key={id + numberOfStars}>
				<BsStarFill />
			</span>
		);
		numberOfStars--;
	}
	if (numberOfStars >= 0.5) {
		starList.push(
			<span key={id + numberOfStars}>
				<BsStarHalf />
			</span>
		);
	}
	if (!starList.length) {
		starList.push(
			<span key={id + numberOfStars}>
				<BsStar />
			</span>
		);
	}
	return (
		<div className="Stars level-right">
			<IconContext.Provider value={startValue}>{starList}</IconContext.Provider>
		</div>
	);
};

export default Stars;
