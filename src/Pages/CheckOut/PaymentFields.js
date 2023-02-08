import {useState, useImperativeHandle, forwardRef} from "react";
import "./PaymenyFields.css";
import TextField from "@material-ui/core/TextField";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export default forwardRef(function PaymentFields(props, ref) {
	const [nameField, setNameFiled] = useState("");
	const [emailField, setEmailFiled] = useState("");
	const [phoneField, setPhoneFiled] = useState("");
	const [cardNumberField, setCardNumberFiled] = useState("");
	const [CVVield, setCVVFiled] = useState("");
	const [selectedDate, handleDateChange] = useState(new Date());

	useImperativeHandle(ref, () => {
		return {
			checkInputs() {
				if (nameField === "" || emailField === "" || phoneField === "" || cardNumberField === "" || CVVield === "") return true;
				else return false;
			},
		};
	});

	return (
		<div className="payment-fields">
			<TextField onChange={(e) => setNameFiled(e.target.value)} label="Full Name" margin="normal" variant="outlined" />
			<TextField onChange={(e) => setEmailFiled(e.target.value)} label="Email" margin="normal" variant="outlined" />
			<TextField onChange={(e) => setPhoneFiled(e.target.value)} label="Phone" margin="normal" variant="outlined" />
			<div className="payment-fields__row">
				<TextField onChange={(e) => setCardNumberFiled(e.target.value)} label="Card Number" margin="normal" variant="outlined" />
				<TextField onChange={(e) => setCVVFiled(e.target.value)} label="CVV" margin="normal" variant="outlined" />
			</div>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<DatePicker
					className="cotf"
					variant="outlined"
					inputVariant="outlined"
					label="Card Date"
					helperText="Start from year selection"
					onChange={handleDateChange}
					value={selectedDate}
					views={["month", "year"]}
				/>
			</MuiPickersUtilsProvider>
		</div>
	);
});
