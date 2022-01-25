const PopUp = (props) => {
	return (
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Reviews</p>
					<button class="delete" aria-label="close" onClick={props.onClose}></button>
				</header>
				<section class="modal-card-body">{props.children}</section>
				<footer class="modal-card-foot"></footer>
			</div>
		</div>
	);
};

export default PopUp;
