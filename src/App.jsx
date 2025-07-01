import "./App.css";
import { UserCard } from "./components/UserCard/UserCard.jsx";
import helaImage from "./assets/hela.webp";
import spiderImage from "./assets/spider-man.jpg";
import { WelcomeMessage } from "./components/WelcomeMesssage/WelcomeMessage.jsx";
import { Product } from "./components/Product/Product.jsx";
import nikeBoots from "./assets/zapatillas-nike.jpg";

export const App = () => {
	return (
		<>
			<UserCard
				name="Fer"
				age={30}
				city="Madrid"
				image={spiderImage}
				nameAvatar={"Fer"}
				buttonText="Click me!"
				textQuote="In the middle of every difficulty lies opportunity."
				author="Albert Einstein"
			/>
			<WelcomeMessage name="Fer" />

			<UserCard
				name="Paola"
				age={36}
				city="Machupichu"
				image={helaImage}
				nameAvatar={"Paola"}
				buttonText="Send me!"
				textQuote="The only limit to our realization of tomorrow is our doubts of today."
				author="Franklin D. Roosevelt"
			/>
			<WelcomeMessage name="Paola" />

			<Product
				image={nikeBoots}
				name={"Nike Mercurial Vapor Fly VII"}
				price={250}
				description={"High-performance football boots designed for speed and agility on the pitch."}
				alertType="info"
				number={0}
			/>
		</>
	);
};
