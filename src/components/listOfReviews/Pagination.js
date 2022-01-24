import { useContext } from "react";
import { PaginationContext } from "./ReviewPages";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
	const { curPage, maxPages } = useContext(PaginationContext);

	const pageButtons = makePageButtons(curPage, maxPages);

	return (
		<div className="pagination is-centered">
			<div className="container">
				<PaginationButton set={curPage - 1}>Previous</PaginationButton>
				{pageButtons}
				<PaginationButton set={curPage + 1}>Next page</PaginationButton>
			</div>
		</div>
	);
};

const makePageButtons = (curPage, maxPages) => {
	const NUMBER_OF_PAGES_SHOWN = 7;
	const PAGES_SHOWN_BEFORE_CUR_PAGE = Math.floor(NUMBER_OF_PAGES_SHOWN / 2);
	const PAGES_SHOWN_AFTER_CUR_PAGE = Math.ceil(NUMBER_OF_PAGES_SHOWN / 2);

	let pageButtons = [];

	for (let pageNum = curPage - PAGES_SHOWN_BEFORE_CUR_PAGE; pageNum < curPage + PAGES_SHOWN_AFTER_CUR_PAGE; pageNum++) {
		let displayValue = pageNum + 1;

		if (displayValue <= 0 || displayValue >= maxPages + 1) {
			continue;
		}
		pageButtons.push(
			<PaginationButton key={pageNum} set={pageNum}>
				{displayValue}
			</PaginationButton>
		);
	}

	return pageButtons;
};

export default Pagination;
