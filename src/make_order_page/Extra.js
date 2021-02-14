import React from 'react';
import { Draggable } from "react-beautiful-dnd";

export default function Extra(props){


return(
   <Draggable draggableId={props.extra.name} index={props.index}>
      {(provided) => (
      <img {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} src={props.extra.image}/> 
      )}
   </Draggable>
)
}
