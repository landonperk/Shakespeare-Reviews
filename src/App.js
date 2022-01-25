import { useState } from "react";

import ReviewPages from "./components/listOfReviews/ReviewPages.js";
import PlayPage from "./components/listOfPlays/PlayPage.js";
import PopUp from "./components/listOfReviews/PopUp.js";

import logo from "./logo.png";

import { useGetReviewData } from "./hooks/useGetReviewData";

function App() {
	const [displayReviewData, setDisplayReviewData] = useState(null);

	const reviewData = useGetReviewData();
	if (!reviewData.get) {
		return (
			<div className="container is-5">
				<img className="image  " src={logo} />
				<div className="message is-success is-large">
					<h1 className="message-header">LOADING...</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<div className="header title level-left card pb-0">
				<img className="image " src={logo} />
				<div className="message">
					<div className="message is-success is-medium">
						<h1 className="message-header ">SHAKESPEARE REVIEWS</h1>
					</div>
					<div className="message-body content ">
						<p>Hello!</p>
						<p>
							All the reviews on this website <br /> are pulled from the Shakespeare API.
						</p>
						<p>The reviews are then assigned randomly to a play.</p>
						<p>
							All the infomation about the plays are stored <br />
							locally as a JSON file.
						</p>
						<p>This was a fun project to do! I hope you enjoy it!</p>
						<small>-Landon Perkins</small>
					</div>
				</div>
			</div>
			{displayReviewData && (
				<PopUp
					onClose={() => {
						setDisplayReviewData(null);
					}}
				>
					<ReviewPages reviewData={{ get: displayReviewData, set: setDisplayReviewData }} />
				</PopUp>
			)}
			<div className="columns">
				<div className="column is-one-third message is-info">
					<h1 className="message-header mb-2 is-medium">All Reviews</h1>
					<ReviewPages reviewData={reviewData} />
				</div>
				<div className="column message is-success">
					<h1 className="message-header title is-large">All Plays</h1>
					<PlayPage reviewData={reviewData} display={setDisplayReviewData} />
				</div>
			</div>
		</div>
	);
}

export default App;
