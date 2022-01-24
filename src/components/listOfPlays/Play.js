const Play = ({ name, img }) => {
	console.log(name);
	return (
		<div className="container column is-5  mb-2 is-centered">
			<div className="Play notification p-3">
				<div className="play-header">
					<img className="playImage" src={img} />
				</div>
				<div className="content">
					<h3 className="subtitle">{name}</h3>
				</div>
			</div>
		</div>
	);
};

export default Play;
