import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const Stars = ({ rating, id }) => {
	const startValue = { color: "#55C778", size: "25px" };
	let numberOfStars = parseFloat(rating);
	let starList = [];

	if (numberOfStars < 0.5) {
		starList.push(
			<span key={id + numberOfStars}>
				<IconContext.Provider value={startValue}>
					<BsStar />
				</IconContext.Provider>
			</span>
		);
	}

	while (numberOfStars >= 1) {
		starList.push(
			<span key={id + numberOfStars}>
				<IconContext.Provider value={startValue}>
					<BsStarFill />
				</IconContext.Provider>
			</span>
		);
		numberOfStars--;
	}
	if (numberOfStars >= 0.5) {
		starList.push(
			<span key={id + numberOfStars}>
				<IconContext.Provider value={startValue}>
					<BsStarHalf />
				</IconContext.Provider>
			</span>
		);
	}

	return <div className="Stars level-right">{starList}</div>;
};

export default Stars;
