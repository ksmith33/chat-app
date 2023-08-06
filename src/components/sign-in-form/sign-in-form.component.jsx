import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

function SignInForm () {
	const navigate = useNavigate();

	async function handleGoogleSignIn(){
		try{
			await signInWithGooglePopup();
			navigate("/");
		}catch(error){
			console.log(error);
		}
	}

	return(
		<div className="sign-in-container">
			<h2>Sign in to ChitChat</h2>
			<Button type="button" buttonType='default' onClick={ handleGoogleSignIn }> Sign In With Google </Button>

		</div>
	)
}

export default SignInForm;