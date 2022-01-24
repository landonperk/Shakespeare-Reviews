import ReviewPages from "./components/listOfReviews/ReviewPages.js";
import PlayPage from "./components/listOfPlays/PlayPage.js";

function App() {
	return (
		<div className="App columns is-centered ">
			<div className="column ">
				<h1 className="title section is-large"></h1>
				<ReviewPages />
				<PlayPage />
			</div>
		</div>
	);
}

export default App;
