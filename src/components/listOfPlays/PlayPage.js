import Play from "./Play";
import playData from "../../data/playData";

const PlayPage = (props) => {
	return (
		<div className="PlayPage container">
			{Object.keys(playData).map((e) => (
				<Play key={e} name={e} img={playData[e].img} />
			))}
		</div>
	);
};

export default PlayPage;
