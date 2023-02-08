import {useState, useLayoutEffect} from "react";
import "./ChooseBox.css";

export default function ChooseBox({extraPosition, handleChoose}) {
	const [halfCircleClass, setHalfCircleClass] = useState("");
	const [quarterCircleClass, setQuarterCircleClass] = useState("");

	useLayoutEffect(() => {
		if (extraPosition === "pizzaSlice0" || extraPosition === "pizzaSlice2") setHalfCircleClass("choose-box__left-circle");
		else if (extraPosition === "pizzaSlice1" || extraPosition === "pizzaSlice3") setHalfCircleClass("choose-box__right-circle");
		switch (extraPosition) {
			case "pizzaSlice0":
			default:
				setQuarterCircleClass("choose-box__left-top-quarter");
				break;
			case "pizzaSlice1":
				setQuarterCircleClass("choose-box__right-top-quarter");
				break;
			case "pizzaSlice2":
				setQuarterCircleClass("choose-box__left-bottom-quarter");
				break;
			case "pizzaSlice3":
				setQuarterCircleClass("choose-box__right-bottom-quarter");
				break;
		}
	}, [extraPosition]);

	function onChoose(position) {
		if (position === "cancel") {
			handleChoose();
		}
		if (position === "quarter") {
			handleChoose([extraPosition]);
		} else if (position === "full") {
			handleChoose(["pizzaSlice0", "pizzaSlice1", "pizzaSlice2", "pizzaSlice3"]);
		} else if (position === "half") {
			if (extraPosition === "pizzaSlice0" || extraPosition === "pizzaSlice2") {
				handleChoose(["pizzaSlice0", "pizzaSlice2"]);
			} else {
				handleChoose(["pizzaSlice1", "pizzaSlice3"]);
			}
		}
	}

	return (
		<div className="choose-box">
			<h4 className="choose-box__title">choose</h4>
			<div className="choose-box__container">
				<div className="choose-box__choose" onClick={() => onChoose("quarter")}>
					<div className="choose-box__circle-container">
						<div className={`choose-box__circle choose-box__quarter ${quarterCircleClass}`}></div>
					</div>
					<span>quarter</span>
				</div>
				<div className="choose-box__choose" onClick={() => onChoose("half")}>
					<div className="choose-box__circle-container">
						<div className={`choose-box__circle choose-box__half-circle ${halfCircleClass}`}></div>
					</div>
					<span>half</span>
				</div>
				<div className="choose-box__choose" onClick={() => onChoose("full")}>
					<div className="choose-box__circle-container">
						<div className="choose-box__circle "></div>
					</div>
					<span>full</span>
				</div>
			</div>
			<button className="choose-box__cancel" onClick={() => onChoose("cancel")}>
				cancel
			</button>
		</div>
	);
}
