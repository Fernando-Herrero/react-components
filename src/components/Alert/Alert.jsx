import "./Alert.css";

export const GetAlertMessage = ({alertType}) => {
	const getMessage = () => {
		switch (alertType) {
			case "success":
				return "Product pursached!";
			case "error":
				return "There was a problem with the purchase.";
			case "info":
				return "This product is on sale.";
			default:
				return null;
		}
	};
	if (!alertType) return null;

	return <h1 className={`alert-message ${alertType}`}>{getMessage()}</h1>;
};
