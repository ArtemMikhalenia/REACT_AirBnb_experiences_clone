import logo from "../../assets/logo.svg";
import "./header.css";

export default function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<a href="#">
					<img src={logo} alt="logo" />
				</a>
			</nav>
		</header>
	);
}
