import Stars from "./Stars";
import howLongAgo from "../../helperFunctions/howLongAgo";

const Review = ({ info }) => {
	return (
		<div className="Review notification">
			<div className="content ml-4 mb-0">
				<p className="title is-spaced is-5 mb-2">
					<strong>{info.author}</strong>
				</p>
				<p className="subtitle is-7  mb-4">{howLongAgo(info.publish_date)}</p>
			</div>
			<div className="columns is-9">
				<div className="card-content ml-4 -pt-0 column">
					<p>{info.body}</p>
				</div>
				<div className="rating mr-1 level-right column is-3">
					<Stars rating={info.rating} id={info.id} />
					<p className="level-right">{info.rating}</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
