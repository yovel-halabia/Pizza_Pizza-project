import {useState, useEffect} from "react";

export default function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const calcIsMobile = () => {
			window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
		};
		calcIsMobile();
		window.addEventListener("resize", calcIsMobile);
		return () => window.removeEventListener("resize", calcIsMobile);
	}, []);
	return isMobile;
}
