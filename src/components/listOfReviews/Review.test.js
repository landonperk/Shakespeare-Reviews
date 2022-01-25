import { render, screen } from "@testing-library/react";
import Review from "./Review";
import mockData from "../../data/mockData.json";

test("Review renders correctly", () => {
	const firstReview = mockData[0];
	render(<Review info={firstReview} />);
	const author = screen.getByText(firstReview.author);
	expect(author).toBeInTheDocument();
});
