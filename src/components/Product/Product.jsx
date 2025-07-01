import { GetAlertMessage } from "../Alert/Alert.jsx";
import { ClickCounting } from "../ClickCounting/ClickCouning.jsx";
import "./Product.css";

export const Product = ({ name, price, image, description, alertType, number }) => {
	return (
		<div className="product-card">
			<img src={image} alt={name} className="product-image" />
			<div>
				<h2 className="product-name">{name}</h2>
				<p className="product-price">{price}£</p>
			</div>
			<p className="product-description">{description}</p>

			{alertType && <GetAlertMessage alertType={alertType} />}

			<ClickCounting number={number} />
		</div>
	);
};
