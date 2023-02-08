import {useState, useEffect} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import "./OrderPizza.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import ChooseBox from "./ChooseBox";
import Extras from "./Extras";
import PizzaSlice from "./PizzaSlice";

export default function OrderPizza({index, item, handleDone}) {
	const [chooseBoxOptions, setchooseBoxOptions] = useState({display: false, extraPosition: "", extra: ""});
	const [extras, setExtras] = useState(item?.extras ? item.extras : []);
	const [pizzaSliceExtras, setPizzaSliceExtras] = useState(
		item?.pizzaSliceExtras ? {...item?.pizzaSliceExtras} : {pizzaSlice0: [], pizzaSlice1: [], pizzaSlice2: [], pizzaSlice3: []},
	);
	const [alertMessage, setAlertMessage] = useState({display: false, content: ""});

	useEffect(() => {
		const debouncer = (func) => {
			var timer;
			return function (event) {
				if (timer) clearTimeout(timer);
				timer = setTimeout(func, 100, event);
			};
		};
		const reRenderExtras = () => setPizzaSliceExtras({...pizzaSliceExtras});
		window.addEventListener("resize", debouncer(reRenderExtras));
		return () => window.removeEventListener("resize", debouncer(reRenderExtras));
	}, []);

	function onDragEnd(result) {
		const {destination, draggableId} = result;
		if (destination?.droppableId.includes("pizzaSlice")) {
			if (extras.length === 3) {
				setAlertMessage({display: true, content: "you can only add 3 extras"});
				setTimeout(() => {
					setAlertMessage({display: false});
				}, 2000);
				return;
			} else if (extras.some((orderExtra) => orderExtra === draggableId)) {
				setAlertMessage({display: true, content: "this extra allready exist"});
				setTimeout(() => {
					setAlertMessage({display: false});
				}, 2000);
				return;
			}
			setchooseBoxOptions({display: true, extraPosition: destination.droppableId, extra: draggableId});
		} else return;
	}

	function handleChoose(sliceExtras) {
		setchooseBoxOptions({display: false});
		if (!sliceExtras) {
			return;
		}
		setExtras((prev) => [...prev, chooseBoxOptions.extra]);
		setPizzaSliceExtras((prev) => {
			for (const sliceExtra of sliceExtras) {
				prev[sliceExtra] = [...prev[sliceExtra], chooseBoxOptions.extra];
			}
			return prev;
		});
	}

	function removeOrderExtra(orderExtra) {
		setExtras((prev) => prev.filter((extra) => extra !== orderExtra));
		setPizzaSliceExtras((prev) => {
			for (const pizzaSlice in prev) {
				prev[pizzaSlice] = prev[pizzaSlice].filter((extra) => extra !== orderExtra);
			}
			return prev;
		});
	}

	return (
		<div className="order-pizza">
			<h3>{item.name}</h3>
			{chooseBoxOptions.display && <ChooseBox extraPosition={chooseBoxOptions.extraPosition} handleChoose={handleChoose} />}

			<div className="order-pizza__content">
				<DragDropContext onDragEnd={onDragEnd}>
					<div className="order-pizza_pizza">
						<div className="order-pizza_slices">
							{Array.from(Array(4).keys()).map((index) => (
								<PizzaSlice index={index} pizzaSliceExtras={pizzaSliceExtras} />
							))}
						</div>
					</div>
					<Extras />
				</DragDropContext>
			</div>

			<div className="order-pizza__extras">
				<span>3 extras max</span>
				<div className="order-pizza__extras-container">
					{extras.map((orderExtra) => {
						return (
							<button onClick={() => removeOrderExtra(orderExtra)}>
								<FontAwesomeIcon icon={faTimes} />
								<span>{orderExtra}</span>
							</button>
						);
					})}
				</div>
			</div>

			<div className="opalerts">
				<Collapse in={alertMessage.display}>
					<Alert className="alert" severity="error">
						{alertMessage.content}
					</Alert>
				</Collapse>
			</div>

			<button
				className="order__button link"
				onClick={() => handleDone({index: index, itemToAdd: {...item, extras: extras, pizzaSliceExtras: pizzaSliceExtras}})}>
				DONE
			</button>
		</div>
	);
}
