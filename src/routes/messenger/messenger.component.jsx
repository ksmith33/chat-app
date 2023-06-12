import Button from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Messenger () {
	return (
		<div>
			<h1>Messenger</h1>
			<Button type="button" onClick={signOutUser}>Sign Out</Button>
		</div>

	);
}

export default Messenger;

