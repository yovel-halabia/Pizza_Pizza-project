import {useEffect, useState} from "react";

export default function useGetDropDownName({menuRef, itemsRef, scrollPosition}) {
	const [dropName, setDropName] = useState("pizza");

	const isCategory = (itemRef) => {
		var menuViewTop = menuRef.current.scrollTop;
		var itemTop = itemRef.offsetTop - itemRef.offsetHeight;
		return menuViewTop > itemTop;
	};

	useEffect(() => {
		itemsRef.current.forEach((itemRef, i) => {
			if (isCategory(itemRef)) {
				setDropName(itemRef.innerText);
			}
		});
	}, [scrollPosition]);

	return dropName;
}
