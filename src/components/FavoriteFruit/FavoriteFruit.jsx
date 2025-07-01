import "./FavoriteFruit.css";

export const FavoriteFruit = ({ fruit, image }) => {
	return (
		<div className="favorite-fruit">
			<h2>My favorite fruit is {fruit}</h2>
			<img src={image} alt={fruit} />
		</div>
	);
};
