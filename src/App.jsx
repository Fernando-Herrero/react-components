import "./App.css";
import { UserCard } from "./components/UserCard/UserCard.jsx";

export const App = () => {
	return (
		<>
			<UserCard name="Fer" age={30} city="Madrid" buttonText="Click me!" />
			<UserCard name="Paola" age={36} city="Machupichu" buttonText="Send me!" />
		</>
	);
};
