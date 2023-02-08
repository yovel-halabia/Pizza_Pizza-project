import {useState, useRef} from "react";
import "./DropDown.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function DropDown({dropName}) {
	return (
		<div className="dropdown">
			<a href="#" className="dropdown-button dropdown__button" data-toggle="dropdown">
				{dropName} <FontAwesomeIcon className="drop-icon" icon={faCaretDown} />
			</a>

			<div className="dropdown-menu dropdown__items">
				{["pizza", "deal", "salad", "dessert", "drink", "cart"].map((item, i) => (
					<a className="dropdown-item" key={i} href={`#${item}`}>
						{item.toUpperCase()}
					</a>
				))}
			</div>
		</div>
	);
}
