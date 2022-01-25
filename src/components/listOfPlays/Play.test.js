import { render, screen, fireEvent } from "@testing-library/react";
import Play from "./Play";
import playData from "../../data/playData.json";
import mockData from "../../data/mockData.json";

test("Show Play Reviews", () => {
	const firstPlay = playData[0];
	firstPlay.reviews = [mockData[0]];

	const display = jest.fn((data) => {
		return data;
	});

	const { getByRole } = render(<Play playData={firstPlay} display={display} />);
	const showReviews = getByRole("button");
	fireEvent.click(showReviews);

	expect(display.mock.results[0].value).toEqual(firstPlay.reviews);
});
