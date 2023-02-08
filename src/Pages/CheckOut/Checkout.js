import {useState, useRef} from "react";
import "./Checkout.css";
import {useHistory, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {initCart} from "../../Redux/Slices/cartSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import Delivery from "./Delivery/Delivery";
import PaymentFields from "./PaymentFields";
import Cart from "../../Components/Cart/Cart";

export default function Checkout() {
	const [alert, setAlert] = useState({show: false, text: "", severity: ""});
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const history = useHistory();
	const deliveryRef = useRef(null);
	const paymentFieldsRef = useRef(null);

	function handleFinishOrder() {
		if (cartState.cartItems?.length == 0) {
			setAlert({show: true, text: "You dont have any items", severity: "error"});
			setTimeout(() => setAlert({...alert, show: false}), 2000);
			return;
		} else if (deliveryRef.current.checkDelivery()) {
			setAlert({show: true, text: "You must add delivery address", severity: "error"});
			setTimeout(() => setAlert({...alert, show: false}), 2000);
			return;
		} else if (paymentFieldsRef.current.checkInputs()) {
			setAlert({show: true, text: "You must fill all payment fields", severity: "error"});
			setTimeout(() => setAlert({...alert, show: false}), 2000);
			return;
		}
		setAlert({show: true, text: "", severity: "success"});
		dispatch(initCart());
		setTimeout(() => history.push("/"));
	}

	return (
		<div className="checkout page">
			<Link to="menu" className="checkout__link-return">
				return <FontAwesomeIcon icon={faCaretDown} style={{transform: "rotate(-90deg)"}} />
			</Link>

			<h6 className="checkout__title">YOUR ORDER</h6>
			<Cart isCheckout={true} />

			<h6 className="checkout__title" id="delivery">
				DELIVERY
			</h6>
			<Delivery ref={deliveryRef} />

			<h6 className="checkout__title">PAYMENT</h6>
			<PaymentFields ref={paymentFieldsRef} />

			<Collapse in={alert.show}>
				<Alert severity={alert.severity}>{alert.text}</Alert>
			</Collapse>

			<button className="checkout__button-pay link" onClick={handleFinishOrder}>
				PAY
			</button>
		</div>
	);
}
