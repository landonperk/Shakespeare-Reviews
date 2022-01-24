export const intoPages = (reviewData) => {
	const NUMBER_OF_REVIEWS_ON_A_PAGE = 7;
	let pages = [[]];

	for (let curReview in reviewData) {
		let curPage = pages.length - 1;
		pages[curPage].push(reviewData[curReview]);
		if (pages[curPage].length === NUMBER_OF_REVIEWS_ON_A_PAGE && curReview < reviewData.length - 1) {
			pages.push([]);
		}
	}
	console.log(pages);
	return pages;
};

export const byHighestRated = (data, set) => {
	let sortedData = [...data];
	for (let i in sortedData) {
		for (let j in sortedData) {
			if (sortedData[i].rating > sortedData[j].rating) {
				let temp = sortedData[i];
				sortedData[i] = sortedData[j];
				sortedData[j] = temp;
			}
		}
	}
	set(sortedData);
};

export const byLowestRated = (data, set) => {
	let sortedData = [...data];
	for (let i in sortedData) {
		for (let j in sortedData) {
			if (sortedData[i].rating < sortedData[j].rating) {
				let temp = sortedData[i];
				sortedData[i] = sortedData[j];
				sortedData[j] = temp;
			}
		}
	}
	set(sortedData);
};

export const byNewest = (data, set) => {
	let sortedData = [...data];
	for (let i in sortedData) {
		for (let j in sortedData) {
			if (new Date(sortedData[i].publish_date) > new Date(sortedData[j].publish_date)) {
				let temp = sortedData[i];
				sortedData[i] = sortedData[j];
				sortedData[j] = temp;
			}
		}
	}
	set(sortedData);
};

export const byOldest = (data, set) => {
	let sortedData = [...data];
	for (let i in sortedData) {
		for (let j in sortedData) {
			if (new Date(sortedData[i].publish_date) < new Date(sortedData[j].publish_date)) {
				let temp = sortedData[i];
				sortedData[i] = sortedData[j];
				sortedData[j] = temp;
			}
		}
	}
	set(sortedData);
};
