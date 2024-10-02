import image from "../../assets/background.png";
import "./main.css";

export default function Main() {
	return (
		<section className="main">
			<div className="main-image">
				<img src={image} alt="image" />
			</div>
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</section>
	);
}
