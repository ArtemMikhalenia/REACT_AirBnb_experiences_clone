import Card from "../Card/Card";
import "./slider.css";
import { sliderData } from "../../data";

export default function Slider() {
	return (
		<div className="slider">
			{sliderData.map((element) => (
				<Card key={element.id} {...element} />
			))}
		</div>
	);
}
