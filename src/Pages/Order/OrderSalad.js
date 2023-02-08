import {useState} from "react";
import "./OrderSalad.css";

export default function OrderSalad({index, item, handleDone}) {
	const [extras, setExtras] = useState(item.extras ? item.extras : []);

	function handleCheck(e, extra) {
		if (e.target.checked) setExtras((extras) => [...extras, extra]);
		else setExtras((extras) => extras.filter((extraItem) => extraItem !== extra));
	}

	return (
		<div className="order-salad">
			<div>
				<h3>{item.name}</h3>
			</div>
			<div className="order-salad__container">
				<div className="order-salad__img-container">
					<img className="osimg" src={item.image} />
				</div>

				<div className="order-salad__checkboxs">
					<ul>
						{item.saladExtras?.map((extra, index) => (
							<li key={index}>
								<input type="checkbox" checked={extras?.includes(extra) ? true : false} onChange={(e) => handleCheck(e, extra)} />
								{extra}
							</li>
						))}
					</ul>
				</div>
			</div>
			<button className="order__button link" onClick={() => handleDone({index: index, itemToAdd: {...item, extras: extras}})}>
				DONE
			</button>
		</div>
	);
}
