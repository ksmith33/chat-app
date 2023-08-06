import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

function Authentication () {
	return (
		<div className="auth-container">
			<header>
				<h1>ChitChat</h1>
			</header>
			<SignInForm />
		</div>
	)
}

export default Authentication;