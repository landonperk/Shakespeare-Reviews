import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterDropDown from "./FilterDropDown";
import mockData from "../../data/mockData.json";

describe("Testing review sorting", () => {
	test("By heighest rated", () => {
		const set = jest.fn((data) => {
			let lastRating = null;
			for (let i in data) {
				if (lastRating === null) {
					lastRating = data[i].rating;
					continue;
				}
				if (data[i].rating > lastRating) {
					return false;
				}
				lastRating = data[i].rating;
			}
			return true;
		});
		const { getByRole } = render(<FilterDropDown data={mockData} set={set} />);

		fireEvent.change(getByRole("combobox"), { target: { value: "Highest Rated" } });

		expect(set.mock.results[0].value).toBe(true);
	});

	test("By lowest rated", () => {
		const set = jest.fn((data) => {
			let lastRating = null;
			for (let i in data) {
				if (lastRating === null) {
					lastRating = data[i].rating;
					continue;
				}
				if (data[i].rating < lastRating) {
					return false;
				}
				lastRating = data[i].rating;
			}
			return true;
		});
		const { getByRole } = render(<FilterDropDown data={mockData} set={set} />);

		fireEvent.change(getByRole("combobox"), { target: { value: "Lowest Rated" } });

		expect(set.mock.results[0].value).toBe(true);
	});

	test("By newest", () => {
		const set = jest.fn((data) => {
			let lastDate = null;
			for (let i in data) {
				let curDate = new Date(data[i].publish_date);
				if (lastDate === null) {
					lastDate = curDate;
					continue;
				}
				if (curDate > lastDate) {
					return false;
				}
				lastDate = curDate;
			}
			return true;
		});
		const { getByRole } = render(<FilterDropDown data={mockData} set={set} />);

		fireEvent.change(getByRole("combobox"), { target: { value: "Newest" } });

		expect(set.mock.results[0].value).toBe(true);
	});

	test("By oldest", () => {
		const set = jest.fn((data) => {
			let lastDate = null;
			for (let i in data) {
				let curDate = new Date(data[i].publish_date);
				if (lastDate === null) {
					lastDate = curDate;
					continue;
				}
				if (curDate < lastDate) {
					return false;
				}
				lastDate = curDate;
			}
			return true;
		});
		const { getByRole } = render(<FilterDropDown data={mockData} set={set} />);

		fireEvent.change(getByRole("combobox"), { target: { value: "Oldest" } });

		expect(set.mock.results[0].value).toBe(true);
	});
});
