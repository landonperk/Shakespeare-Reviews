const howLongAgo = (date) => {
	const secondsSinceDate = new Date() - new Date(date);

	const unitsOfTime = {};

	unitsOfTime["second"] = 1000;
	unitsOfTime["minute"] = unitsOfTime.second * 60;
	unitsOfTime["hour"] = unitsOfTime.minute * 60;
	unitsOfTime["day"] = unitsOfTime.hour * 24;
	unitsOfTime["week"] = unitsOfTime.day * 7;
	unitsOfTime["month"] = unitsOfTime.week * 4;
	unitsOfTime["year"] = unitsOfTime.month * 12;

	let phrase = "";
	for (let key in unitsOfTime) {
		const timePast = Math.floor(secondsSinceDate / unitsOfTime[key]);
		if (timePast >= 1) {
			phrase = `${timePast} ${key + (timePast > 1 ? "s" : "")} ago`;
		}
	}
	return phrase;
};
export default howLongAgo;
