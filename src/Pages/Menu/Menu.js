import {useState, useRef} from "react";
import "./Menu.css";

import {items} from "../../data";

import Dropdown from "./Dropdown";
import Item from "./Item";
import Cart from "../../Components/Cart/Cart";
import useGetDropDownName from "./useGetDropDownName";

export default function MenuPage() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const menuRef = useRef(null);
	const itemsRef = useRef([]);
	const dropName = useGetDropDownName({menuRef, itemsRef, scrollPosition});

	return (
		<div className="menu page" ref={menuRef} onScroll={(e) => setScrollPosition(e.target.scrollTop)}>
			<Dropdown dropName={dropName} />

			<div className="menu__content">
				{["pizza", "deal", "salad", "dessert", "drink", "cart"].map((category, index) => (
					<>
						<div className="menu__category" key={index} ref={(el) => (itemsRef.current[index] = el)} id={`${category}`}>
							<span>{category.toUpperCase()}</span>
						</div>
						{category !== "cart" ? (
							<div className="menu__category-items">
								{items
									.filter((item) => item.type.includes(category))
									.map((item, i) => (
										<Item key={i} item={item} />
									))}
							</div>
						) : (
							<div className="menu__category-items">
								<Cart />
							</div>
						)}
					</>
				))}
			</div>
		</div>
	);
}
