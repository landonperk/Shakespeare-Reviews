export const intoPages = (reviewData) => {
	const NUMBER_OF_REVIEWS_ON_A_PAGE = 4;
	let pages = [[]];

	for (let curReview in reviewData) {
		let curPage = pages.length - 1;
		pages[curPage].push(reviewData[curReview]);
		if (pages[curPage].length === NUMBER_OF_REVIEWS_ON_A_PAGE && curReview < reviewData.length - 1) {
			pages.push([]);
		}
	}
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

export const assignReviews = (data, reviews) => {
	const reviewsClone = [...reviews];

	while (reviewsClone.length > 0) {
		const randomReview = Math.floor(Math.random() * reviewsClone.length - 1) + 1;
		const randomPlay = Math.floor(Math.random() * data.length - 1) + 1;

		data[randomPlay].reviews = [...data[randomPlay].reviews, reviewsClone[randomReview]];
		reviewsClone.splice(randomReview, 1);
	}

	return data;
};

export const getAverageRating = (reviews) => {
	if (reviews.length) {
		let averageRating = 0;
		for (let i of reviews) {
			averageRating += i.rating;
		}
		averageRating /= reviews.length;

		return averageRating;
	}
};
