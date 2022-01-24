import { useState, useEffect, createContext } from "react";
import * as filterReviews from "../../helperFunctions/filterData";
import Review from "./Review";
import FilterDropDown from "./FilterDropDown";
import Pagination from "./Pagination";
import { useGetReviewData } from "../../hooks/useGetReviewData";
export const PaginationContext = createContext();

const ReviewPages = () => {
	const [reviewData, setReviewData] = useGetReviewData();
	const [curPage, setCurPage] = useState(0);

	if (!reviewData) {
		return <div>Loading</div>;
	}
	const reviewsByPage = filterReviews.intoPages(reviewData);
	const maxPages = reviewsByPage.length;

	return (
		<div>
			<FilterDropDown data={reviewData} set={setReviewData} />
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
