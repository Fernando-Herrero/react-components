import "./Product.css";

export const Product = ({ name, price, image, description }) => {
	return (
		<div className="product-card">
			<img src={image} alt={name} className="product-image" />
			<div>
				<h2 className="product-name">{name}</h2>
				<p className="product-price">{price}£</p>
			</div>
			<p className="product-description">{description}</p>
		</div>
	);
};
