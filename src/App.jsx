import "./App.css";
import { UserCard } from "./components/UserCard/UserCard.jsx";
import helaImage from "./assets/hela.webp";
import spiderImage from "./assets/spider-man.jpg";
import { WelcomeMessage } from "./components/WelcomeMesssage/WelcomeMessage.jsx";

export const App = () => {
	return (
		<>
			<UserCard name="Fer" age={30} city="Madrid" image={spiderImage} nameAvatar={"Fer"} buttonText="Click me!" />
			<WelcomeMessage name="Fer" />

			<UserCard
				name="Paola"
				age={36}
				city="Machupichu"
				image={helaImage}
				nameAvatar={"Paola"}
				buttonText="Send me!"
			/>
			<WelcomeMessage name="Paola" />
		</>
	);
};
