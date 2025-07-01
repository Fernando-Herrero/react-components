import "./App.css";
import { UserCard } from "./components/UserCard/UserCard.jsx";
import helaImage from "./assets/hela.webp";
import spiderImage from "./assets/spider-man.jpg";
import { WelcomeMessage } from "./components/WelcomeMesssage/WelcomeMessage.jsx";
import { Product } from "./components/Product/Product.jsx";
import nikeBoots from "./assets/zapatillas-nike.jpg";
import { Box } from "./components/Box/Box.jsx";
import bananaImage from "./assets/banana.webp";
import strawberryImage from "./assets/strawberry.jpg";

export const App = () => {
	return (
		<>
			<Box>
				<UserCard
					name="Fer"
					age={30}
					city="Madrid"
					image={spiderImage}
					nameAvatar={"Fer"}
					buttonText="Click me!"
					textQuote="In the middle of every difficulty lies opportunity."
					author="Albert Einstein"
					fruit="Banana"
					imageFruit={bananaImage}
				/>
			</Box>
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
				fruit="Strawberry"
				imageFruit={strawberryImage}
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

			<Box>
				<h1>Hola, mundo!</h1>
				<p>Esto es un párrafo dentro de la caja.</p>
			</Box>

			<Box>
				<h2>Lista de tareas</h2>
				<ul>
					<li>Aprender React</li>
					<li>Hacer ejercicio</li>
					<li>Leer un libro</li>
				</ul>
			</Box>
		</>
	);
};
