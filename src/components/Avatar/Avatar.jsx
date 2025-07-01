import "./Avatar.css";

export const Avatar = ({ image, name }) => {
	return (
		<div className="avatar">
			<img src={image} alt={name} className="avatar-img" />
			<p className="avatar-name">{name}</p>
		</div>
	);
};
