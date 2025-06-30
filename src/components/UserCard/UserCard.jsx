import "./UserCard.css";
import { CustomButton } from "../CustomButton/CustomButton.jsx";

export const UserCard = ({ name, age, city, buttonText }) => {
	return (
		<>
			<div className="user-card">
				<h1>My name is {name}</h1>
				<h3>I'm {age} years old</h3>
				<p>I was born in {city}</p>

				<CustomButton text={buttonText} />
			</div>
		</>
	);
};
