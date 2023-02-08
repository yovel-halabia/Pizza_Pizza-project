import {useState} from "react";
import {items} from "../../../data";
import "./ChooseSalad.css";
import OrderSalad from "../OrderSalad";

export default function ChooseSalad({index, handleDone, item}) {
	const [saladItem, setSaladItem] = useState(item ? {...item} : null);

	return (
		<>
			{!saladItem ? (
				<div className="choose-salad">
					<h3>CHOOSE SALAD</h3>
					{items
						.filter((item) => item.type === "salad")
						.map((item) => {
							return (
								<div className="choose-salad__card" onClick={() => setSaladItem(() => item)}>
									<img src={item.image} style={{width: item.width, height: item.height}} />
									<h5>{item.name}</h5>
								</div>
							);
						})}
				</div>
			) : (
				<OrderSalad item={saladItem} index={index} handleDone={handleDone} />
			)}
		</>
	);
}
