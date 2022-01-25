import Stars from "../listOfReviews/Stars";
import { getAverageRating } from "../../helperFunctions/filterData";

const Play = ({ playData, display }) => {
	return (
		<div>
			<div className=" Play column columns notification mb-6">
				<div className="play-header column is-5">
					<img className="playImage" src={playData.img} />
				</div>
				<div className="media-content content mt-1">
					<h3>
						<strong>{playData.title}</strong>
					</h3>
				</div>
				<div className="media-right mr-4 has-text-right">
					<p>Review average:</p>
					{<Stars rating={getAverageRating(playData.reviews)} id={playData.title} />}
					<p className="">{playData.reviews.length} reviews</p>
					<button className="button is-info mt-5" onClick={() => display(playData.reviews)}>
						Show Reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default Play;
