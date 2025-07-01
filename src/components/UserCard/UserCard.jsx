import "./UserCard.css";
import { CustomButton } from "../CustomButton/CustomButton.jsx";
import { Avatar } from "../Avatar/Avatar.jsx";

export const UserCard = ({ name, age, city, buttonText, image, nameAvatar }) => {
	return (
		<>
			<div className="user-card">
				<h1>My name is {name}</h1>
				<h3>I'm {age} years old</h3>
				<p>I was born in {city}</p>

				<Avatar image={image} name={nameAvatar} />

				<CustomButton text={buttonText} />
			</div>
		</>
	);
};
