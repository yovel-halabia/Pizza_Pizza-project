import {useRef} from "react";
import "./PizzaSlice.css";
import {Droppable} from "react-beautiful-dnd";

export default function PizzaSlice({index, pizzaSliceExtras}) {
	const sliceRef = useRef(null);

	const extraOnPizza = (pizza_slice) => {
		const {[pizza_slice]: extras} = pizzaSliceExtras;
		var extrasArray = [];
		switch (extras.length) {
			case 1:
				for (let i = 0; i < 12; i++) {
					extrasArray.push(extras[0]);
				}
				break;
			case 2:
				for (let i = 0; i < 12; i++) {
					if (i % 2 === 0) extrasArray.push(extras[0]);
					else extrasArray.push(extras[1]);
				}
				break;
			case 3:
				for (let i = 0; i < 12; i++) {
					if (i % 3 === 0) extrasArray.push(extras[0]);
					else if (i % 3 === 1) extrasArray.push(extras[1]);
					else extrasArray.push(extras[2]);
				}
				break;
			case 0:
			default:
				return;
		}

		const sliceSize = sliceRef.current.clientWidth;
		for (const extraIndex in extrasArray) {
			var randomPos1 = Math.floor(Math.random() * (sliceSize / 2));
			var randomPos2 = Math.floor(Math.random() * (sliceSize / 2));
			extrasArray[extraIndex] = {name: extrasArray[extraIndex], randomPos1: randomPos1, randomPos2: randomPos2};
		}

		const generatePositionCss = (extraPosition) => {
			let style = {};
			if (pizza_slice === "pizzaSlice0") {
				style = {bottom: extraPosition.randomPos1 + "px", right: extraPosition.randomPos2 + "px"};
			} else if (pizza_slice === "pizzaSlice1") {
				style = {bottom: extraPosition.randomPos1 + "px", left: extraPosition.randomPos2 + "px"};
			} else if (pizza_slice === "pizzaSlice2") {
				style = {top: extraPosition.randomPos1 + "px", right: extraPosition.randomPos2 + "px"};
			} else if (pizza_slice === "pizzaSlice3") {
				style = {top: extraPosition.randomPos1 + "px", left: extraPosition.randomPos2 + "px"};
			}
			return style;
		};

		return extrasArray.map((extra, index) => (
			<img key={index} style={generatePositionCss(extra)} src={"../../images/extras/" + extra.name.replace(" ", "_") + ".png"} />
		));
	};

	return (
		<div className="pizza-slice">
			<Droppable key={index} droppableId={`pizzaSlice${index}`}>
				{(provided, snapshot) => {
					return (
						<div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? " lighting" : undefined}>
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
			<div className="pizza-slice__extras" ref={sliceRef}>
				{extraOnPizza(`pizzaSlice${index}`)}
			</div>
		</div>
	);
}
