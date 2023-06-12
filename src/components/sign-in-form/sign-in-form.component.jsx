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
			<h1>Sign In</h1>
			<Button type="button" onClick={ handleGoogleSignIn }> Sign In With Google </Button>
		</div>
	)
}

export default SignInForm;