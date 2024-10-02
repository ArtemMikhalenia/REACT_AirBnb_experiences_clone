import imageStar from "../../assets/star-icon.svg";
import "./card.css";

export default function Card(props) {
	let badgeText = "";
	props.openSpots === 0
		? (badgeText = "Sold out")
		: (badgeText = "Online");

	return (
		<div className="card">
			<div className="card-top-section">
				{badgeText && <div className="card-status">{badgeText}</div>}
				<div className="card-image">
					<img src={props.img} alt={props.alt} />
				</div>
			</div>
			<div className="card-bottom-section">
				<div className="card-rating">
					<img className="star-icon" src={imageStar} alt="star-icon" />{" "}
					<span className="card-rating-number">{props.rating}</span> (
					{props.reviewCount}) &#8226; {props.country}
				</div>
				<h2 className="card-title">{props.title}</h2>
				<p className="card-price">
					<span>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}
