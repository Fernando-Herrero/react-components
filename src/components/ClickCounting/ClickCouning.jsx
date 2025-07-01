import "./ClickCounting.css";

export const ClickCounting = ({ number }) => {
	return <button className="countButton">Purchases: {number}</button>;
};
