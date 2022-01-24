import { render, screen } from "@testing-library/react";
import Review from "./components/Review";

test("if the reviews component has been rendered", async () => {
	const mockData = {
		author: "Kaley Schiller",
		body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
		id: "9783221620868",
		publish_date: "2016-09-05T23:25:47.642350Z",
		rating: 0.8,
	};
	render(<Review info={mockData} />);
	const author = screen.getByText(mockData.author);
	const rating = screen.getByText(mockData.rating);
	const body = screen.getByText(mockData.body);

	expect(author).toBeInTheDocument();
	expect(rating).toBeInTheDocument();
	expect(body).toBeInTheDocument();
});
