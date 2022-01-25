import { useState, useEffect, createContext } from "react";
import * as filterReviews from "../../helperFunctions/filterData";
import Review from "./Review";
import FilterDropDown from "./FilterDropDown";
import Pagination from "./Pagination";
export const PaginationContext = createContext();

const ReviewPages = ({ reviewData }) => {
	const [curPage, setCurPage] = useState(0);

	const reviewsByPage = filterReviews.intoPages(reviewData.get);
	const maxPages = reviewsByPage.length;

	if (reviewData.get.length === 0) {
		return <h1>No Reviews Here</h1>;
	}

	return (
		<div aria-label="reviewPages">
			<FilterDropDown data={reviewData.get} set={reviewData.set} />
			{reviewsByPage[curPage].map((e) => (
				<Review info={e} key={e.id} />
			))}
			<PaginationContext.Provider value={{ curPage, maxPages, setCurPage }}>
				<Pagination />
			</PaginationContext.Provider>
		</div>
	);
};

export default ReviewPages;
