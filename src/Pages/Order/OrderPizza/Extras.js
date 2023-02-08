import React from "react";
import "./Extras.css";
import {Droppable, Draggable} from "react-beautiful-dnd";
import {pizzaExtras} from "../../../data";

export default function Extras() {
	return (
		<div className="extras">
			<span className="extras__title">Drag & Drop</span>
			<Droppable droppableId="extras-container">
				{(provided) => (
					<div className="extras__container" ref={provided.innerRef} {...provided.droppableProps}>
						<div className="extras__items">
							{pizzaExtras.map((extra, index) => (
								<Draggable draggableId={extra.name} index={index}>
									{(provided, snapshot) => (
										<div className="extras__item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
											<img src={extra.image} />
											<span className={snapshot.isDragging && "hidden"}>{extra.name}</span>
										</div>
									)}
								</Draggable>
							))}
						</div>

						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
}
