import { useContext } from "react";
import { PaginationContext } from "./ReviewPages";

const PaginationButton = (props) => {
	const { maxPages, setCurPage } = useContext(PaginationContext);

	const safeSetCurPage = (num) => {
		if (num >= 0 && num < maxPages) {
			setCurPage(num);
		}
	};

	const buttonClass = "button is-inverted is-focused is-primary";
	return (
		<button className={buttonClass} onClick={() => safeSetCurPage(props.set)}>
			{props.children}
		</button>
	);
};

export default PaginationButton;
