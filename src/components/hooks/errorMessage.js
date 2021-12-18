import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorMessage = message => {
	return toast.error(message, {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

export default errorMessage;
